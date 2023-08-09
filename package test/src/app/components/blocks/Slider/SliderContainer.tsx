import styled from 'styled-components';
import {Flex, Text} from 'app/components/blocks';
import {theme} from 'styles/theme';
import {PointerProps} from './type';

export const LabelStyled = styled(Flex)<PointerProps>`
  align-items: center;
  min-height: ${theme.sizes[5]};
  min-width: ${theme.sizes[5]};
  padding: ${theme.space[1]};
  background-color: ${theme.colors.white[0]};
  border-radius: 5px;
  background-color: ${theme.colors.white[0]};
  shadow-color: ${({mode}) =>
    mode === 'dark' ? theme.colors.white[0] : theme.colors.blue[0]};
  shadow-offset: 1px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  right: ${({min, max, pointer}) =>
    pointer === min ? '10px' : pointer === max ? '60px' : '30px'};
`;

export const NotchStyled = styled(Flex)<PointerProps>`
  width: ${theme.sizes[1]};
  height: ${theme.sizes[1]};
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${theme.colors.white[0]};
  border-left-width: ${theme.space[0]};
  border-right-width: ${theme.space[0]};
  border-top-width: ${theme.sizes[1]};
  margin-bottom: -${theme.space[1]};
  right: ${({min, max, pointer}) => {
    switch (true) {
      case pointer === min:
        return '25px';
      case pointer <= min + 5:
        return '35px';
      case pointer > max - 5 && pointer !== max:
        return '25px';
      case pointer === max:
        return '35px';
      default:
        return '30px';
    }
  }};
`;

export const TextLabel = styled(Text)`
  font-size: 16px;
`;
