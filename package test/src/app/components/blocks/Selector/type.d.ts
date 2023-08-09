import {ReactNode} from 'react';
import {
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import {TextInputProps} from '../TextInput/types';

export type SelectorSizes = 'sm' | 'lg';

export interface OptionProps {
  label: string;
  value: string | number;
}
export interface SelectorProps
  extends TextInputProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    BorderRadiusProps,
    BoxShadowProps,
    PositionProps {
  startAdornment?: ReactNode;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  onValueChange?: (value: OptionProps) => void;
  defaultValue?: OptionProps;
  options: OptionProps[];
  value?: OptionProps;
}
