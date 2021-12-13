import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { userApi } from '../api/user-api';

import userSlice from './user-slice';
import modalSlice from './modal-slice';

export const reducer = combineReducers({
  user: userSlice,
  modal: modalSlice,

  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), userApi.middleware],
});

export default store;
