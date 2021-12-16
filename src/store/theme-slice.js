import { createSlice } from '@reduxjs/toolkit';

import { THEME_STORAGE } from 'constants/storage';

const initialState = {
  isDark: localStorage.getItem(THEME_STORAGE) ? JSON.parse(localStorage.getItem(THEME_STORAGE)).isDark : true,
};

const slice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme(state, action) {
      localStorage.setItem(THEME_STORAGE,
        JSON.stringify({ isDark: action.payload }));
      state.isDark = action.payload;
    },
  },
});

export const { changeTheme } = slice.actions;
export default slice.reducer;

export const selectTheme = state => state.theme.isDark;
