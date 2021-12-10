const { fetchBaseQuery } = require('@reduxjs/toolkit/query');


export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = getState().user?.user;

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});
