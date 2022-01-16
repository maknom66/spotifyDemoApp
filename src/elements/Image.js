import styled from 'styled-components/native';
import propTypes from '@styled-system/prop-types';
import {border, flexbox, space, layout} from 'styled-system';

export const Image = styled.Image`
  ${border}
  ${flexbox}
  ${space}
  ${layout}
`;

Image.propTypes = {
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.layout,
};
