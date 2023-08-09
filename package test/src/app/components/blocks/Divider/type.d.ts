
import { LayoutProps} from 'styled-system';

export interface DividerProps extends LayoutProps {
  orientation: 'horizontal' | 'vertical';
  color?: string;
  thickness?: number;
  size?: number
}
