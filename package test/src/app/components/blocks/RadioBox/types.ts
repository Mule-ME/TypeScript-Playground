export interface RadioGroupContainerProps {
  gap?: number;
}

export interface RadioOptionProps {
  error?: string;
  label?: string;
  description?: string;
  value: string;
  disabled?: boolean;
}

export interface RadioIndicatorWrapperProps {
  checked?: boolean;
  disabled?: boolean;
  size?: number;
}

export interface LabelProps {
  type?: string;
}

export interface RadioGroupProps
  extends RadioIndicatorWrapperProps,
    RadioGroupContainerProps {
  options: RadioOptionProps[];
  value?: string;
  fontSize?: number;
  onValueChange?: (value: string) => void;
}
