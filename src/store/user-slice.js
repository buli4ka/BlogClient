import { createSlice } from '@reduxjs/toolkit';
import jwt from 'jsonwebtoken';

import { USER_IMAGE_STORAGE, USER_KEY_STORAGE } from '../constants/storage';
import { userApi } from '../api/user-api';


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

    const data = await dispatch(userApi.endpoints.login.initiate(user));

  } catch (error) {
    dispatch(setError(error ?? 'Unexpected error'));

  }
};

export const logout = () => dispatch => {
  dispatch(removeCredentials());
};
