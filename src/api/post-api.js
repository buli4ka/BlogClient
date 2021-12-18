import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postApi = createApi({
  reducerPath: 'postFromApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => 'post/getAll',
    }),
    createPost: builder.mutation({
      query: post => ({
        url: 'post/CreatePost',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});


export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
} = postApi;
