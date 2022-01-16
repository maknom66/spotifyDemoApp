import propTypes from '@styled-system/prop-types';
import styled from 'styled-components/native';
import {layout, space, typography, color} from 'styled-system';

export const Text = styled.Text`
  ${layout}
  ${space}
  ${typography}
  ${color}
`;

Text.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.color,
};
