import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userFromApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
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
      query: ({ userUpdateData, userId }) => ({
        url: `user/update/${userId}`,
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
    getIsSubscribed: builder.query({
      query: ({ userId, authorId }) => `user/isUserSubscribed?userId=${userId}&authorId=${authorId}`,
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
