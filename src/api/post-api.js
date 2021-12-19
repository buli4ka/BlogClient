import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postApi = createApi({
  reducerPath: 'postFromApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => 'post/getAll',
    }),
    getPreviewsById: builder.query({
      query: userId => `post/getPreviewsById/${userId}`,
    }),
    getPostById: builder.query({
      query: id => `post/getById/${id}`,
    }),
    createPost: builder.mutation({
      query: post => ({
        url: 'post/CreatePost',
        method: 'POST',
        body: post,
      }),
    }),
    addPostLike: builder.mutation({
      query: (likeBody)=>({
        url: 'post/addLike',
        method: 'POST',
        body: likeBody,
      }),
    }),

  }),
});


export const {
  useGetAllPostsQuery,
  useGetPreviewsByIdQuery,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,

  useCreatePostMutation,
  useAddPostMutation,
} = postApi;
