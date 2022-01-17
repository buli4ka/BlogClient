import { createSlice } from '@reduxjs/toolkit';
import jwt from 'jsonwebtoken';

import { showErrorNotification, showSuccessNotification } from './notification-slice';
import { hideModal } from './modal-slice';

import { NOTIFICATIONS } from 'constants/notifications';
import { isUserUpdatingData } from 'utils/user-validation';
import { MODALS } from 'constants/modals';
import { USER_IMAGE_STORAGE, USER_KEY_STORAGE } from 'constants/storage';
import { userApi } from 'api/user-api';
import { uploadIcon } from 'utils/getImageBody';
import { getUpdateData } from 'utils/user-request';

const SECOND_IN_MILLISECONDS = 1000;

export const initialState = {
  user: localStorage.getItem(USER_KEY_STORAGE) ? JSON.parse(localStorage.getItem(USER_KEY_STORAGE)) : null,
  imageUrl: localStorage.getItem(USER_IMAGE_STORAGE) ? JSON.parse(localStorage.getItem(USER_IMAGE_STORAGE)) : null,
  error: null,
  isTokenRenewing: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const userFromJWT = jwt.decode(payload.jwtToken);
      const user = {
        id: userFromJWT.id,
        accessToken: payload.jwtToken,
        username: userFromJWT.username,
        firstName: userFromJWT.firstName,
        lastName: userFromJWT.lastName,
        email: userFromJWT.email,
        exp: userFromJWT.exp,
      };

      localStorage.setItem(USER_KEY_STORAGE, JSON.stringify(user));
      state.user = user;

    },

    setImageUrl: (state, { payload }) => {
      localStorage.setItem(USER_IMAGE_STORAGE, JSON.stringify({ imageUrl: payload }));
      state.imageUrl.imageUrl = payload;
    },
    removeCredentials: (state) => {
      localStorage.removeItem(USER_KEY_STORAGE);
      state.user = null;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    setTokenRenewingState: (state, { payload }) => {
      state.isTokenRenewing = payload;
    },
  },
});

export default slice.reducer;

export const userSelector = state => state.user;
export const userImageSelector = state => state.imageUrl.imageUrl;
export const isTokenRenewingSelector = state => state.isTokenRenewing;

export const { setCredentials, removeCredentials, setImageUrl, setError, setTokenRenewingState } = slice.actions;

// Actions
export const login = (user) => async dispatch => {
  try {

    const { data, error } = await dispatch(userApi.endpoints.login.initiate(user));

    if (error) {
      return dispatch(showErrorNotification(error.data.message ?? error.data.title));
    }
    dispatch(setCredentials(data));
    dispatch(hideModal({ id: MODALS.AUTHENTICATE }));
  } catch (error) {
    dispatch(setError(error ?? 'Unexpected error'));

  }
};

export const register = (user, userIcon) => async dispatch => {
  try {
    const { data, error } = await dispatch(userApi.endpoints.registration.initiate(user));

    if (error) {
      return dispatch(showErrorNotification(error.data.message ?? error.data.title));
    }
    if (userIcon) {
      await uploadIcon(userIcon, data.id, data.jwtToken);
    }
    dispatch(setCredentials(data));
    dispatch(hideModal({ id: MODALS.AUTHENTICATE }));

  } catch (error) {
    dispatch(setError(error ?? 'Unexpected error'));

  }
};

export const logout = () => dispatch => {
  dispatch(removeCredentials());
};

export const update = (user, userToUpdate, userIcon) => async (dispatch, getState) => {
  const userId = getState().user.user?.id;
  const jwtToken = getState().user.user?.accessToken;
  const isUpdating = isUserUpdatingData(user, userToUpdate);

  try {
    if (isUpdating) {
      const { error } = await dispatch(userApi.endpoints.update.initiate({
        userUpdateData: getUpdateData(user),
        userId,
      }));

      if (error) {
        return dispatch(showErrorNotification(error.data.message ?? error.data.title));
      }
    }

    if (userIcon) {
      await uploadIcon(userIcon, userId, jwtToken);
    }
    dispatch(hideModal({ id: MODALS.UPDATE }));

    if (isUpdating) {
      dispatch(removeCredentials());

      return dispatch(showSuccessNotification(NOTIFICATIONS.LOGOUT_USER));
    }
  } catch (error) {
    dispatch(setError(error ?? 'Unexpected error'));

  }

};

export const subscribe = (authorId) => async (dispatch, getState) => {
  const userId = getState().user.user?.id;

  try {
    if (!userId || !authorId) {
      return dispatch(setError('Unexpected error'));
    }

    const { error } = await dispatch(userApi.endpoints.subscribe.initiate({ userId, authorId }));

    if (error) {
      return dispatch(showErrorNotification(error.data.message ?? error.data.title));
    }


  } catch (error) {
    dispatch(setError(error ?? 'Unexpected error'));

  }
};

export const isSubscribed = (authorId) => async (dispatch, getState) => {
  const userId = getState().user.user?.id;

  try {
    if (!userId || !authorId) {
      return dispatch(setError('Unexpected error'));
    }
    const { data, error } = await dispatch(userApi.endpoints.getIsSubscribed.initiate({ userId, authorId }));

    if (error) {
      return dispatch(showErrorNotification(error.data.message ?? error.data.title));
    }

    return data;
  } catch (error) {
    dispatch(setError(error ?? 'Unexpected error'));

  }
};

export const checkToken = () => async (dispatch, getState) => {
  const user = getState().user?.user;

    // Token is expired, trying to refresh
  if (user && user.exp && Date.now() >= user.exp * SECOND_IN_MILLISECONDS) {

    dispatch(setTokenRenewingState(true));
    const { data, error } = await dispatch(userApi.endpoints.login.initiate(user));

    if (data) {
      dispatch(setCredentials(data));
    } else {
      dispatch(removeCredentials());
    }
    dispatch(setTokenRenewingState(false));
  }
};
