import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './base-query';

export const userApi = createApi({
  reducerPath: 'userFromApi',
  baseQuery: baseQuery, //fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: userRegistrationData => ({
        url: 'user/register',
        method: 'POST',
        body: userRegistrationData,
      }),
    }),
    login: builder.mutation({
      query: userLoginData => ({
        url: 'user/authenticate',
        method: 'POST',
        body: userLoginData,
      }),
    }),

    subscribe: builder.mutation({
      query: userSubscribeData => ({
        url: 'user/subscribe',
        method: 'POST',
        body: userSubscribeData,
      }),
      invalidatesTags: ['User'],
    }),

    update: builder.mutation({
      query: ({ userUpdateData, userId }) => ({
        url: `user/update/${userId}`,
        method: 'PUT',
        body: userUpdateData,
      }),
      invalidatesTags: ['User'],

    }),

    delete: builder.mutation({
      query: id => ({
        url: 'user/delete',
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['User'],

    }),

    getUserById: builder.query({
      query: id => `user/getById/${id}`,
      providesTags: ['User'],

    }),

    getAuthorById: builder.query({
      query: id => `user/getAuthorById/${id}`,
      providesTags: ['User'],

    }),

    getSubscribers: builder.query({
      query: id => `user/getUserSubscribers/${id}`,
    }),
    getSubscribed: builder.query({
      query: id => `user/getUserSubscribed/${id}`,
    }),
    getIsSubscribed: builder.query({
      query: ({ userId, authorId }) => `user/isUserSubscribed?userId=${userId}&authorId=${authorId}`,
      providesTags: ['User'],
    }),

  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useSubscribeMutation,
  useUpdateMutation,
  useDeleteMutation,
  useGetUserByIdQuery,
  useGetAuthorByIdQuery,
  useGetSubscribersQuery,
  useGetSubscribedQuery,
  useGetIsSubscribedQuery,
} = userApi;
