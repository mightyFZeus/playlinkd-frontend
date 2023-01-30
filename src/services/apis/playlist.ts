

import { playlinkdApi } from './api'
import { ResponsePayload, IData } from '../../utils/payload';

 export const playListApi = playlinkdApi.injectEndpoints({
   endpoints: (builder) => ({
     getPlaylist: builder.mutation<ResponsePayload<IData>, string>({
       query: (credentials) => ({
         url: "/playlist",
         method: "POST",
         body: {
           url: credentials,
         },
       }),
     }),
   }),
   overrideExisting: true,
 });

export const { useGetPlaylistMutation } = playListApi
