import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  posts: [],
  filteredPosts: [],
  selectedPost: {},
  searchText: null,
  submitNotification: null,

};


const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    selectPost: (state, { payload }) => {

    },


  },
});
