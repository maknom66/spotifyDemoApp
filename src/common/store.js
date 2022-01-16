import create from 'zustand';

import {getUser, getRecommendedPlaylists, getPlaylistTracksData, getNextData} from '@api/spotify';

export const useSpotifyAuth = create((set, get) => ({
  user: null,
  accessToken: null,
  setAccessToken: accessToken => {
    set({accessToken});
  },
  getUser: async () => {
    const res = await getUser();
    set({user: res?.data});
  },
}));

export const useSpotify = create((set, get) => ({
  playlistsData: null,
  playlistTracksData: null,
  loadingNextData: false,
  getRecommendedPlaylists: async country => {
    const res = await getRecommendedPlaylists(country);
    set({playlistsData: res?.data});
  },
  getPlaylistTracksData: async playlist_id => {
    const res = await getPlaylistTracksData(playlist_id);
    set({playlistTracksData: res?.data});
  },
  setPlaylistTracksData: async playlistTracksData => {
    set({playlistTracksData});
  },
  getNextData: async (type, url) => {
    set({loadingNextData: true});
    const res = await getNextData(url);
    set({
      // [type]: {...get()?.[type], items: [...get()?.[type]?.items, ...res?.data?.items]},
      [type]: {...res?.data, items: [...get()?.[type]?.items, ...res?.data?.items]},
      loadingNextData: false,
    });
  },
}));
