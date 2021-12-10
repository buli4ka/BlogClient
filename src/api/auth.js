import { fetchBaseQuery } from '@reduxjs/toolkit/query';


const query = fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL });

export const obtainTokens = (payload) => query({ url: 'user/authenticate', body: payload, method: 'POST' });
