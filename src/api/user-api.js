import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './base-query';


export const userApi = createApi({
  reducerPath: 'userFromApi',
  baseQuery,
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
    }),

    update: builder.mutation({
      query: userUpdateData => ({
        url: 'user/update',
        method: 'PUT',
        body: userUpdateData,
      }),
    }),

    delete: builder.mutation({
      query: id => ({
        url: 'user/delete',
        method: 'DELETE',
        body: id,
      }),
    }),

    getUserById: builder.query({
      query: id => `user/getById/${id}`,
    }),

    getAuthorById: builder.query({
      query: id => `user/getAuthorById/${id}`,
    }),

    getSubscribers: builder.query({
      query: id => `user/getUserSubscribers/${id}`,
    }),
    getSubscribed: builder.query({
      query: id => `user/getUserSubscribed/${id}`,
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
} = userApi;
