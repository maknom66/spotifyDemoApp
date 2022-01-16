import React, {useState, useRef} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import TrackCard from '@screens/Tracks/TrackCard';
import EmptyCard from '@screens/Tracks/EmptyCard';
import {Header} from '@components';
import {useSpotify} from '@src/common/store';

const Tracks = ({route}) => {
  const {playlist_id} = route?.params;
  const {getPlaylistTracksData, playlistTracksData, loadingNextData, getNextData} = useSpotify(
    state => state,
  );

  useState(() => {
    getPlaylistTracksData(playlist_id);
  }, []);

  const handleOnEndReached = () => {
    if (playlistTracksData?.next && !loadingNextData) {
      getNextData('playlistTracksData', playlistTracksData?.next);
    }
  };

  return (
    <SafeAreaView>
      <Header title="Playlist Tracks" />
      <FlatList
        data={playlistTracksData?.items}
        ListEmptyComponent={() =>
          new Array(20).fill(0).map((_, index) => <EmptyCard key={index} />)
        }
        renderItem={({item}) => <TrackCard item={item} />}
        ListFooterComponent={() => loadingNextData && <EmptyCard />}
        keyExtractor={({track: {id} = {}}) => id}
        onEndReachedThreshold={1}
        onEndReached={handleOnEndReached}
      />
    </SafeAreaView>
  );
};

export default Tracks;
