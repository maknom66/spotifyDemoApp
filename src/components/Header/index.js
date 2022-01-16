import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import propTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, View} from '@elements';
import {scaledValue} from '@common/utils';

export const Header = ({title, canGoBack}) => {
  const navigation = useNavigation();
  return (
    <View width="100%" height={60} flexDirection="row" alignItems="center" pl={10}>
      {canGoBack && (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <View height={40} width={40} justifyContent="center">
            <Ionicons name="chevron-back" size={scaledValue(30)} />
          </View>
        </TouchableOpacity>
      )}
      {title && (
        <Text fontSize="m" fontWeight="600" pl={10}>
          {title}
        </Text>
      )}
    </View>
  );
};

Header.propTypes = {
  title: propTypes.string,
  canGoBack: propTypes.bool.isRequired,
};

Header.defaultProps = {
  canGoBack: true,
};
