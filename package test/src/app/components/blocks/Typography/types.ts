import {
  ColorProps,
  FontSizeProps,
  LayoutProps,
  LineHeightProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

export type TextVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'button';

export interface TextProps
  extends TextAlignProps,
    FontSizeProps,
    ColorProps,
    LineHeightProps,
    SpaceProps,
    LayoutProps {
  variant?: TextVariants;
}
