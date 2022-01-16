import styled from 'styled-components/native';
import propTypes from '@styled-system/prop-types';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';
import {flexbox} from 'styled-system';

export const SafeAreaView = styled(RNSafeAreaView)`
  ${flexbox}
`;

SafeAreaView.propTypes = {
  ...propTypes.flexbox,
};
