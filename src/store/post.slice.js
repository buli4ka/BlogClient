import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  posts: [],
  selectedPost: {},
  searchText: null,
  submitNotification: null,

};


const slice = createSlice({
  name: 'userPosts',
  initialState,
  reducers: {
    selectPost: (state, { payload }) => {

    },


  },
});
