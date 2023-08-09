import {SpaceProps} from 'styled-system';

export interface CheckboxContainerProps {
  disabled: boolean;
}

export interface StyledCheckBoxProps {
  checked?: boolean;
  disabled?: boolean;
  size?: number;
}

export interface LabelProps {
  type?: string;
  fontSize?: number;
}

export interface CheckboxProps extends StyledCheckBoxProps, SpaceProps {
  label?: string;
  description?: string;
  error?: string;
  fontSize?: number;
  onValueChange: () => void;
}
