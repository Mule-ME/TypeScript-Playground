import {ReactNode} from 'react';
import {TextInputProps as NativeTextInputProps, ViewProps} from 'react-native';
import {
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export type TextInputSizes = 'sm' | 'lg';
export interface TextInputContainerProps extends ViewProps, BorderRadiusProps {
  size?: TextInputSizes;
  error?: boolean;
  isActive?: boolean;
  isTyping?: boolean;
  disabled?: boolean;
}

export interface StyledTextInputProps extends NativeTextInputProps {
  size?: TextInputSizes;
  error?: boolean;
  isActive?: boolean;
  disabled?: boolean;
}

export interface TextInputProps
  extends StyledTextInputProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    BorderRadiusProps,
    BoxShadowProps,
    PositionProps {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
}
