import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postApi = createApi({
  reducerPath: 'postFromApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  tagTypes: ['Post', 'Comment'],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => 'post/getAll',
      providesTags: ['Post'],

    }),
    getPreviewsById: builder.query({
      query: userId => `post/getPreviewsById/${userId}`,
      providesTags: ['Post'],

    }),
    getPostById: builder.query({
      query: id => `post/getById/${id}`,
      providesTags: ['Post', 'Comment'],

    }),
    createPost: builder.mutation({
      query: post => ({
        url: 'post/CreatePost',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],

    }),
    updatePost: builder.mutation({
      query: post =>({
        url: 'post/UpdatePost',
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],

    }),
    deletePost: builder.mutation({
      query: ({ postId, authorId }) => ({
        url: `post/DeletePost?postId=${postId}&authorId=${authorId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],

    }),
    addPostLike: builder.mutation({
      query: (likeBody)=>({
        url: 'post/addLike',
        method: 'POST',
        body: likeBody,
      }),
      invalidatesTags: ['Post'],

    }),
    createUpdatePostComment: builder.mutation({
      query: (commentBody)=>({
        url: 'comment/CreateUpdateComment',
        method: 'POST',
        body: commentBody,
      }),
      invalidatesTags: ['Comment'],

    }),
    updatePostComment: builder.mutation({
      query: (commentBody)=>({
        url: 'comment/createComment',
        method: 'PUT',
        body: commentBody,
      }),
      invalidatesTags: ['Comment'],

    }),
    deletePostComment: builder.mutation({
      query: (commentId ) => ({
        url: `comment/DeleteComment/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],

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
  useCreateUpdatePostCommentMutation,
  useDeletePostCommentMutation,
  useUpdatePostCommentMutation,
} = postApi;
