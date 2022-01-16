import * as React from 'react';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Image, Text, View} from '@elements';
import screenNames from '@navigation/screenNames';

const PlaylistCard = ({item}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const handleOnPress = () => navigation?.navigate(screenNames?.Tracks, {playlist_id: item?.id});

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View alignItems="center" flexDirection="row" p={20}>
        <Image height={120} width={120} borderRadius={10} source={{uri: item?.images?.[0]?.url}} />
        <View>
          <Text pl={20} fontSize="m">
            {item?.name}
          </Text>
          <Text pl={20} fontSize="xs" color="grey">
            {item?.tracks?.total} tracks
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistCard;
