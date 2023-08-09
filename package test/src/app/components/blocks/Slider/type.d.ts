export interface ThemeProps {
  mode?: 'dark' | 'light';
}
export interface PointerProps extends ThemeProps {
  pointer: number;
  min: number;
  max: number;
}

export interface SliderProps extends ThemeProps {
  step: number;
  handleValueChange: (value: number[]) => void;
  min: number;
  max: number;
  disableRange: boolean;
  variant?: 'sm' | 'md' | 'lg';
}
