import styled from 'styled-components/native';
import propTypes from '@styled-system/prop-types';
import {flexbox, space, border, color, layout} from 'styled-system';

export const View = styled.View`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

View.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
};
