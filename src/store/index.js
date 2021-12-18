import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import postSlice from './post-slice';
import userSlice from './user-slice';
import modalSlice from './modal-slice';
import themeSlice from './theme-slice';
import notificationSlice from './notification-slice';

import { userApi } from 'api/user-api';
import { postApi } from 'api/post-api';

export const reducer = combineReducers({
  user: userSlice,
  modal: modalSlice,
  theme: themeSlice,
  post: postSlice,
  notification: notificationSlice,

  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,

});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()
    , userApi.middleware
    , postApi.middleware
  ],
});

export default store;
