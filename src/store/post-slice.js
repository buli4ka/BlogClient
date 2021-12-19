import { createSlice } from '@reduxjs/toolkit';

import { uploadImages } from '../utils/getImageBody';
import { NOTIFICATIONS } from '../constants/notifications';

import { showErrorNotification } from './notification-slice';

import { postApi } from 'api/post-api';

export const initialState = {
  posts: [],
  selectedPost: {},
  searchText: null,
  submitNotification: null,

};


const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    selectPost: (state, { payload }) => {
      state.selectedPost = payload;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
    },


  },
});

export default slice.reducer;
export const { selectPost, addPost } = slice.actions;
export const selectedPostSelector = state => state.selectedPost;


export const createPost = (post, images) => async (dispatch, getState) => {
  const authorId = getState().user.user.id;
  const request = { ...post, authorId };

  try {
    const { data, error } = await dispatch(postApi.endpoints.createPost.initiate(request));

    if (error) {
      return dispatch(showErrorNotification(error.data.message ?? error.data.title));
    }
    if (images){
      await uploadImages(images, data.id);
    }
  } catch (error) {
    dispatch(showErrorNotification(error ?? 'Unexpected error'));

  }
};

export const addLikeToPost =(postId)=>async (dispatch, getState)=>{
  const userId = getState().user.user?.id;

  try {
    if (!userId){
      return dispatch(showErrorNotification(NOTIFICATIONS.NOT_AUTHORIZED));
    }
    const { data, error } = await dispatch(postApi.endpoints.addPostLike.initiate({ postId, userId }));

    if (error) {
      return dispatch(showErrorNotification(error.data.message ?? error.data.title));
    }
  } catch (error){
    dispatch(showErrorNotification(error ?? 'Unexpected error'));

  }


};
