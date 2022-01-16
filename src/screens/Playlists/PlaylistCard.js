import * as React from 'react';
import propTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Image, Text, View} from '@elements';
import screenNames from '@navigation/screenNames';

const PlaylistCard = ({item}) => {
  const navigation = useNavigation();

  const handleOnPress = () => navigation?.navigate(screenNames?.Tracks, {playlist_id: item?.id});

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View alignItems="center" flexDirection="row" p={20}>
        <Image height={120} width={120} borderRadius={10} source={{uri: item?.images?.[0]?.url}} />
        <View flex={1}>
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

PlaylistCard.propTypes = {
  item: propTypes.shape({
    id: propTypes.string.isRequired,
    images: propTypes.array.isRequired,
    name: propTypes.string.isRequired,
    tracks: propTypes.shape({
      total: propTypes.number.isRequired,
    }),
  }),
};

export default PlaylistCard;
