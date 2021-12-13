import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseQuery } from './base-query';

export const iconApi = createApi({
  reducerPath: 'iconFromApi',
  baseQuery,
  endpoints: (builder) => ({
    addOrUpdateIcon: builder.mutation({
      query: ({ imageBody, userId }) => ({
        url: `icon/addOrUpdateImage/${userId}`,
        method: 'POST',
        body: imageBody,
      }),
    }),

    deleteIcon: builder.mutation({
      query: ({ imageBody, userId }) => ({
        url: `icon/deleteUserIcon/${userId}`,
        method: 'Delete',
      }),
    }),
    getIconById: builder.query({
      query: id => `icon/getById/${id}`,
    }),
  }),
});

export const {
  useAddOrUpdateIconMutation,
  useDeleteIconMutation,
  useGetIconByIdQuery,
} = iconApi;
