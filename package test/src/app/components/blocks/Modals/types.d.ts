import {LayoutProps, SpaceProps} from 'styled-system';

export interface ContainerProps extends LayoutProps, SpaceProps {
  mode?: 'dark' | 'light';
}
export interface ContentWrapperProps {}

export interface ModalContainerProps extends ContainerProps {}
export interface HeaderProps {}
export interface ContentContainerProps {
  variance: 'action' | 'info';
}
export interface LabelProps {}
export interface ActionContainerProps {
  direction?: 'row' | 'column';
}
export interface ActionProps extends ContainerProps {
  direction: 'row' | 'column';
  primary: boolean;
}

export interface PopupProps extends ContainerProps {
  severity: 'success' | 'warning' | 'danger';
  label: string;
  position: 'top' | 'right' | 'left' | 'bottom';
  duration?: number;
  delay?: number;
}
export interface ModalProps
  extends ActionContainerProps,
    ContentContainerProps,
    ModalContainerProps {
  variance: 'action' | 'info';
  secondary?: string;
  content: string;
  label: string;
  primary?: string;
  onPress: () => void;
  show: boolean;
}
