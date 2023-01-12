import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const playlinkdApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://playlinkd-staging-api.onrender.com",
    baseUrl: "https://test-vxm7.onrender.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  reducerPath: "globalApi",
  endpoints: () => ({}),
  // tagTypes: ["PLAYLIST"],
});

