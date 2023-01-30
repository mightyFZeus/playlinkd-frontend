export interface ITracks {
  trackName: string;
  artistName?: string;
}
export interface IData {
  _id: string;
  title: string;
  duration: number;
  numberOfSongs: number;
  playlistType: string;
  youTubeUrl?: string;
  appleUrl?: string;
  spotifyUrl?: string;
  playlistId: string;
  tracks: ITracks[];
  description: string;
  __v: number;
}
export interface ResponsePayload<T> {
  status: string;
  message: string;
  data: T;
}

export interface PlatFormData {
  url: string;
  link: string | string[] | undefined;
}

export interface PlaylistData {
  playlistUrl:string
}