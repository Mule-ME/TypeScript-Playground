import React from 'react';
import styled, {css} from 'styled-components/native';
import {TooltipProps, TooltipContainerProps} from './types';
import {Flex, Button, Text} from 'app/components/blocks';
import {theme} from 'styles/theme';

//TODO
//icon size customization is not implemented yet
//Tooltip text container arrow feature is not implemented yet
const Container = styled(Flex)`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TooltipContainer = styled.View<TooltipContainerProps>`
  position: absolute;
  z-index: 999;
  padding: 8px 12px;
  background-color:${({mode}) =>
    mode === 'dark' ? theme.colors.black[0] : theme.colors.white[0]}
shadow-color: ${({mode}) =>
  mode === 'dark' ? theme.colors.white[0] : theme.colors.black[0]};
shadow-offset: 1px 20px;
shadow-opacity: 0.25;
shadow-radius: 3.84px;
elevation: 5;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;

  &::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px;
    border-color: #000;
  }

  ${({placement}) =>
    placement === 'top' &&
    css`
      bottom: 75%;
      left: 68%;
      &::before {
        top: 100%;
        left: 50%;
        border-top-color: #000;
      }
    `}

  ${({placement}) =>
    placement === 'right' &&
    css`
      top: 50%;
      left: 70%;
      &::before {
        top: 50%;
        left: 0;
        border-right-color: #000;
      }
    `}

  ${({placement}) =>
    placement === 'bottom' &&
    css`
      top: 75%;
      left: 68%;
      &::before {
        bottom: 100%;
        left: 50%;
        border-bottom-color: #000;
      }
    `}

  ${({placement}) =>
    placement === 'left' &&
    css`
      top: 50%;
      right: 70%;
      &::before {
        top: 50%;
        right: 0;
        border-left-color: #000;
      }
    `}
`;

const TooltipIcon = styled(Button)`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

const TooltipText = styled(Text)``;

const Tooltip: React.FC<TooltipProps> = ({
  placement,
  icon,
  text,
  mode = 'light',
  ...props
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handlePressIn = () => {
    setShowTooltip(true);
  };

  const handlePressOut = () => {
    setShowTooltip(false);
  };
  return (
    <Container {...props}>
      {showTooltip && (
        <>
          <TooltipContainer placement={placement}>
            <TooltipText color={mode === 'dark' ? 'white.0' : 'black.0'}>
              {text}
            </TooltipText>
          </TooltipContainer>
        </>
      )}
      {props.children}
      <TooltipIcon onPressIn={handlePressIn} onPressOut={handlePressOut}>
        {icon}
      </TooltipIcon>
    </Container>
  );
};

export default Tooltip;
