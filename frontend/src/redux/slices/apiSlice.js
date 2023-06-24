import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
  // baseUrl: 'https://coding-dashboard-silk.vercel.app',
  credentials: 'include',
});//without proxy use http://localhost:5000 backend port

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],//for caching
  endpoints: (builder) => ({}),
});