import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  FlexboxProps,
  FontSizeProps,
  FontWeightProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

export type ButtonVariants = 'primary' | 'secondary' | 'subtle' | 'text';
export type ButtonSizes = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends TouchableOpacityProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    BorderRadiusProps,
    FontSizeProps,
    TextAlignProps,
    FontWeightProps,
    BoxShadowProps,
    PositionProps,
    FlexboxProps {
  backgroundColor?: string;
  variant?: ButtonVariants;
}

export interface IconButtonProps extends ButtonProps {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children?: ReactNode;
}
