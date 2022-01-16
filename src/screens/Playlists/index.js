import React, {useEffect, useCallback} from 'react';
import queryString from 'query-string';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import SpotifyAuth from './SpotifyAuth';
import PlaylistCard from '@screens/Playlists/PlaylistCard';
import EmptyCard from '@screens/Playlists/EmptyCard';
import {Header} from '@components';
import {useSpotify, useSpotifyAuth} from '@src/common/store';

const styles = StyleSheet.create({
  footer: {paddingBottom: 80},
});

const Playlists = ({route}) => {
  const {query_string} = route?.params || {};
  const {accessToken, setAccessToken, user, getUser} = useSpotifyAuth(state => state);
  const {getRecommendedPlaylists, playlistsData, setPlaylistTracksData, loadingNextData} =
    useSpotify(state => state);

  useFocusEffect(
    useCallback(() => {
      setPlaylistTracksData(null);
    }, []),
  );

  useEffect(() => {
    if (query_string) {
      const {access_token} = queryString.parse(query_string);
      setAccessToken(access_token);
    }
  }, [query_string]);

  useEffect(() => {
    if (accessToken) {
      getUser();
      return;
    }
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      getRecommendedPlaylists(user?.country);
    }
  }, [user]);

  const handleOnEndReached = () => {
    const {next} = playlistsData?.playlists || {};
    if (next && !loadingNextData) {
      getNextData('playlistsData', next);
    }
  };

  return (
    <SafeAreaView>
      <Header title="Recommended Playlists" canGoBack={false} />
      <FlatList
        data={playlistsData?.playlists?.items}
        contentContainerStyle={styles.footer}
        ListEmptyComponent={() => new Array(5).fill(0).map((_, index) => <EmptyCard key={index} />)}
        renderItem={({item}) => <PlaylistCard item={item} />}
        keyExtractor={({id}) => id}
        onEndReachedThreshold={1}
        onEndReached={handleOnEndReached}
      />
      <SpotifyAuth />
    </SafeAreaView>
  );
};

export default Playlists;
