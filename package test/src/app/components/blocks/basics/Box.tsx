import styled from 'styled-components/native';
import {BoxProps} from './types';
import {
  space,
  color,
  layout,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  borderRadius,
} from 'styled-system';

const Box = styled.View<BoxProps>`
  ${compose(
    space,
    color,
    layout,
    grid,
    background,
    border,
    position,
    shadow,
    borderRadius,
  )}
`;

export default Box;
