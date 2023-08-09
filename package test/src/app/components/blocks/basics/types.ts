import {
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BorderRadiusProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    ShadowProps {}

export interface FlexProps extends BoxProps, FlexboxProps {}
