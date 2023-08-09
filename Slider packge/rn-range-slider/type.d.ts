export interface ThemeProps {
  mode?: "dark" | "light";
}

export interface LabelProps extends ThemeProps {
  title: number;
}

export interface SliderProps extends ThemeProps {
  max?: number;
  min?: number;
  step?: number;
  handleValueChange?: (low: number, high: number) => void;
  disableRange?: boolean;
}
