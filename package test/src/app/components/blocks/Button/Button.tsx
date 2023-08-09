import styled from 'styled-components/native';
import {
  border,
  borderRadius,
  boxShadow,
  compose,
  flex,
  flexbox,
  fontSize,
  fontWeight,
  layout,
  position,
  space,
  textAlign,
  variant,
} from 'styled-system';
import {theme} from 'styles/theme';
import {ButtonProps} from './types';

const Button = styled.TouchableOpacity<ButtonProps>`
  font-family: Sora-Regular;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor ?? 'transparent'};

  height: ${theme.sizes[9]};
  width: ${theme.sizes[30]};
  border-radius: ${theme.radii[7]};

  ${compose(
    space,
    layout,
    border,
    borderRadius,
    fontSize,
    textAlign,
    fontWeight,
    boxShadow,
    position,
    flexbox,
    flex,
  )}
  ${variant({
    variants: {
      primary: {
        backgroundColor: theme.colors.primary[0],
      },
      secondary: {
        backgroundColor: theme.colors.secondary[0],
      },
      subtle: {
        backgroundColor: 'transparent',
        border: '1px',
        borderColor: theme.colors.accent[1],
      },
      text: {
        height: 'auto',
        width: 'auto',
        backgroundColor: 'transparent',
      },
    },
  })};
`;

export default Button;

Button.defaultProps = {
  activeOpacity: 0.7,
};
