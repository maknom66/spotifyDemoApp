import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Image, Text, View} from '@elements';
import screenNames from '@navigation/screenNames';

const PlaylistCard = ({item}) => {
  const {track: {id, name, popularity, album: {artists, images} = {}} = {}} = item;
  const artistNames = artists?.map(({name}) => name)?.join(', ');
  const navigation = useNavigation();

  const handleOnPress = () => navigation?.navigate(screenNames?.Track, {track: item?.track});

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View alignItems="center" flexDirection="row" px={20} py={10}>
        <View flex={1}>
          <Image height={60} width={60} borderRadius={5} source={{uri: images?.[0]?.url}} />
        </View>
        <View flex={5} pr={10}>
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

export default PlaylistCard;