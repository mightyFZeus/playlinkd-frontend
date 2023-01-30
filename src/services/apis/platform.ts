import { PlatFormData } from "@/utils/payload";
import { playlinkdApi } from "./api";
import { ResponsePayload, PlaylistData } from "../../utils/payload";

export const platfromApi = playlinkdApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlatform: builder.mutation<ResponsePayload<PlaylistData>, PlatFormData>({
      query: (credentials) => ({
        url: `/${credentials.url}`,
        method: "POST",
        body: {
          url: credentials.link,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetPlatformMutation } = platfromApi;
