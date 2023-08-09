import styled from 'styled-components/native';
import {
  color,
  compose,
  fontSize,
  layout,
  lineHeight,
  space,
  textAlign,
  variant,
} from 'styled-system';
import {theme} from 'styles/theme';
import {TextProps} from './types';

const Text = styled.Text<TextProps>`
  font-family: 'Sora-Regular';
  color: ${theme.colors.black[0]};
  font-size: ${theme.fontSizes[6]};

  ${compose(color, fontSize, layout, space, lineHeight, textAlign)}
  ${variant({
    variants: {
      h1: {
        fontSize: 16,
      },
      h2: {
        fontSize: 8,
      },
      h3: {
        fontSize: 7,
      },
      subtitle1: {
        fontSize: 6,
      },
      subtitle2: {
        fontSize: 4,
      },
      body1: {
        fontSize: 6,
      },
      body2: {
        fontSize: 4,
      },
      caption: {
        fontSize: 2,
      },
      overline: {
        fontSize: 1,
      },
      button: {
        fontSize: 6,
        lineHeight: '20px',
      },
    },
  })};
`;

export default Text;
