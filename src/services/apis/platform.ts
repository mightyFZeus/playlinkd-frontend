import { playlinkdApi } from "./api";

export const platfromApi = playlinkdApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlatform: builder.query({
        query: (url) => `/${url}`,
    }),
      
  }),
    overrideExisting: true,
  
});

export const { useLazyGetPlatformQuery } = platfromApi;
