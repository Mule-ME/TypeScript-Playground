import React from 'react';

export interface TooltipContainerProps {
  placement: 'top' | 'right' | 'bottom' | 'left';
  mode?: 'dark' | 'light';
}

export interface TooltipProps extends TooltipContainerProps {
  icon: React.ReactNode;
  text: string;
  children: React.ReactNode;
  iconSize?: 'sm' | 'md' | 'lg';
}
