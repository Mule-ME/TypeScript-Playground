import styled from 'styled-components/native';
import {Flex} from 'app/components/blocks';
import {DividerProps} from './type';
import {theme} from 'styles/theme';

const Divider = styled(Flex)<DividerProps>`
  width: ${({orientation, thickness, size}) =>
    orientation === 'vertical'
      ? `${thickness}px` ?? `${1}px`
      : size
      ? `${size}%`
      : '100%'};
  height: ${({orientation, thickness, size}) =>
    orientation === 'horizontal'
      ? `${thickness}px` ?? `${1}px`
      : size
      ? `${size}%`
      : '100%'};
  background-color: ${({color}) => color ?? theme.colors.black[0]};
`;

export default Divider;
