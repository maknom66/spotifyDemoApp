import axios from 'axios';
import Config from 'react-native-config';

export const authURI = `${Config.SPOTIFY_AUTH_URL}authorize?response_type=token&client_id=${Config.SPOTIFY_CLIENT_ID}&redirect_uri=${Config.SPOTIFY_REDIRECT_URI}&scope=user-read-private`;

export const getUser = () => {
  return axios.get('v1/me');
};

export const getRecommendedPlaylists = country => {
  const params = {
    country,
  };
  return axios.get('v1/browse/featured-playlists', {params});
};

export const getPlaylistTracksData = playlist_id => {
  return axios.get(`v1/playlists/${playlist_id}/tracks`);
};

export const gettrackData = track_id => {
  return axios.get(`v1/tracks/${track_id}`);
};

export const getNextData = url => {
  return axios.get(url);
};
