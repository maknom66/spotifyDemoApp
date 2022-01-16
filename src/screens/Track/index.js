import dayjs from 'dayjs';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '@components';
import {Image, Text, View} from '@elements';

const Track = ({route}) => {
  const {
    track: {album: {artists, name, images, release_date} = {}, name: track_name, duration_ms} = {},
  } = route?.params;
  const artistNames = artists?.map(({name}) => name)?.join(', ');
  const formattedReleaseDate = new Date(release_date);
  const durationInMinsAndSecs = dayjs?.duration(duration_ms)?.format('m:ss');

  return (
    <SafeAreaView>
      <Header title="Track Info" />
      <View width="100%" alignItems="center" p={20}>
        <Image aspectRatio={1} width="70%" borderRadius={5} source={{uri: images?.[0]?.url}} />
      </View>
      <View p="m">
        <Text fontWeight="bold" fontSize="m">
          {name}
        </Text>
        <Text my={5} fontWeight="600" fontSize="xxs">
          {artistNames}
        </Text>
        <Text fontSize="xxs">Album • {formattedReleaseDate?.getFullYear()}</Text>
        <View mt="l">
          <Text fontWeight="700" fontSize="xs">
            {track_name}
          </Text>
          <Text fontSize="xxs">Duration • {durationInMinsAndSecs}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Track;
