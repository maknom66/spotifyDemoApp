import React from 'react';
import propTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Image, Text, View} from '@elements';
import screenNames from '@navigation/screenNames';

const TrackCard = ({item}) => {
  const {track: {name, popularity, album: {artists, images} = {}} = {}} = item;
  const artistNames = artists?.map(({name}) => name)?.join(', ');
  const navigation = useNavigation();

  const handleOnPress = () => navigation?.navigate(screenNames?.Track, {track: item?.track});

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View alignItems="center" flexDirection="row" px={20} py={10}>
        <Image
          height={60}
          width={60}
          borderRadius={5}
          source={{uri: images?.[2]?.url || images?.[1]?.url || images?.[0]?.url}}
        />
        <View pr={10} flex={1}>
          <Text pl={20} numberOfLines={1} fontWeight="bold">
            {name}
          </Text>
          <Text pl={20} numberOfLines={1} fontSize="xs" color="dimgray">
            {artistNames}
          </Text>
          <Text pl={20} fontSize="xxs" color="grey">
            {popularity}% Listeners Recommended
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

TrackCard.propTypes = {
  item: propTypes.shape({
    track: propTypes.shape({
      name: propTypes.string.isRequired,
      popularity: propTypes.number.isRequired,
      album: propTypes.shape({
        artists: propTypes.array.isRequired,
        images: propTypes.array.isRequired,
      }),
    }),
  }),
};

export default TrackCard;
