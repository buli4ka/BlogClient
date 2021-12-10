import { createSlice } from '@reduxjs/toolkit';

import { TYPES } from '../constants/notifications';

export const initialState = {
  isShow: false,
  type: null,
  message: null,
};

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setErrorNotification: (state, { payload }) => {
      state.isShow = true;
      state.type = TYPES.ERROR;
      state.message = payload;
    },

    setWarningNotification: (state, { payload }) => {
      state.isShow = true;
      state.type = TYPES.WARNING;
      state.message = payload;
    },

    setSuccessNotification: (state, { payload }) => {
      state.isShow = true;
      state.type = TYPES.SUCCESS;
      state.message = payload;
    },

    reset: () => initialState,
  },
});

export default slice.reducer;

export const getNotificationSelector = state => state.notification;

export const { setErrorNotification, setWarningNotification, setSuccessNotification, reset } = slice.actions;

export const SHOW_TIME = 3000;
let time = null;

export const showErrorNotification = (msg) => dispatch => {
  dispatch(setErrorNotification(msg));
  if (time) clearTimeout(time);
  time = setTimeout(() => dispatch(reset()), SHOW_TIME);
};

export const showWarningNotification = (msg) => dispatch => {
  dispatch(setWarningNotification(msg));
  if (time) clearTimeout(time);
  time = setTimeout(() => dispatch(reset()), SHOW_TIME);
};

export const showSuccessNotification = (msg) => dispatch => {
  dispatch(setSuccessNotification(msg));
  if (time) clearTimeout(time);
  time = setTimeout(() => dispatch(reset()), SHOW_TIME);
};
