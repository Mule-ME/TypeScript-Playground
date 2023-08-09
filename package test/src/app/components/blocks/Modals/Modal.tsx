import React from 'react';
import styled from 'styled-components/native';
import {Modal} from 'react-native';
import {Flex, Text, Button, Box} from 'app/components/blocks';
import {theme} from 'styles/theme';
import {CloseIcon, ModalIconDark, ModalIconLight} from '../assets';
import {
  ModalContainerProps,
  HeaderProps,
  LabelProps,
  ContentContainerProps,
  ActionContainerProps,
  ActionProps,
  ModalProps,
} from './types';
import {CloseButton} from './Popup';
const ModalContainer = styled(Flex)<ModalContainerProps>`
  width: 90%;
  padding-left: ${theme.space[2]};
  padding-right: ${theme.space[2]};
  margin: auto;
  border-radius: ${theme.radii[2]};
  background-color: ${({mode}) =>
    mode === 'dark' ? theme.colors.black[0] : theme.colors.white[0]};
`;

const Header = styled(Flex)<HeaderProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.space[3]};
`;
const ContentContainer = styled(Flex)<ContentContainerProps>`
  align-items: center;
  margin: ${theme.space[3]};
  margin-top: ${theme.space[0]};
  margin-bottom: ${({variance}) =>
    variance == 'info' ? theme.space[6] : theme.space[0]};
`;
const ActionContainer = styled(Flex)<ActionContainerProps>`
  flex-direction: ${({direction}) => direction};
  margin: ${theme.space[3]};
  margin-top: ${theme.space[0]};
  justify-content: center;
  align-items: center;
`;
const Label = styled(Text)<LabelProps>`
  padding-top: ${theme.space[0]};
`;
const Action = styled(Button)<ActionProps>`
  width: ${({direction}) => (direction == 'row' ? theme.sizes[23] : '100%')};
  background-color: ${({primary, mode}) =>
    primary
      ? theme.colors.primary[0]
      : !primary && mode === 'light'
      ? theme.colors.white[0]
      : theme.colors.black[0]};
  border: 1px solid
    ${({primary, mode}) =>
      !primary && mode === 'light'
        ? theme.colors.accent[1]
        : !primary && mode === 'dark'
        ? theme.colors.accent[3]
        : theme.colors.primary[0]};
  margin-bottom: ${({direction}) =>
    direction == 'column' ? theme.space[1] : theme.space[3]};
`;

const CustomModal = ({
  secondary = '',
  content = '',
  direction = 'row',
  label = '',
  mode = 'light',
  onPress,
  primary = '',
  variance = 'action',
  show = false,
}: ModalProps) => {
  const color = mode === 'dark' ? 'white.0' : 'black.0';

  return (
    <Modal
      animationType="slide"
      onRequestClose={onPress}
      transparent={true}
      visible={show}>
      <Box
        style={{width: '100%', height: '100%', backgroundColor: '#272523c8'}}>
        <ModalContainer mode={mode}>
          <Header>
            {mode === 'dark' ? <ModalIconDark /> : <ModalIconLight />}
            <CloseButton onPress={onPress}>
              <CloseIcon />
            </CloseButton>
          </Header>
          <ContentContainer variance={variance}>
            <Label color={color} fontSize={6}>
              {label}
            </Label>
            <Label color={color} fontSize={4}>
              {content}
            </Label>
          </ContentContainer>
          {variance == 'action' ? (
            <ActionContainer direction={direction}>
              <Action
                direction={direction}
                mode={mode}
                mx={0}
                onPress={onPress}
                primary={true}>
                <Label color="white.0" fontSize={4}>
                  {primary}
                </Label>
              </Action>
              <Action
                direction={direction}
                mode={mode}
                mx={0}
                onPress={onPress}
                primary={false}>
                <Label color={color} fontSize={4}>
                  {secondary}
                </Label>
              </Action>
            </ActionContainer>
          ) : (
            <></>
          )}
        </ModalContainer>
      </Box>
    </Modal>
  );
};

export default CustomModal;
