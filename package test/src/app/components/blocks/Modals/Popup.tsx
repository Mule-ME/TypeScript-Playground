import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Flex, Text, IconButton} from 'app/components/blocks';
import {
  SuccessCircleIcon,
  WarningCircleIcon,
  DangerCircleIcon,
  CloseIcon,
} from '../assets';
import {
  ContainerProps,
  ContentWrapperProps,
  LabelProps,
  PopupProps,
} from './types';
import {theme} from 'styles/theme';
import {
  Animated,
  Dimensions,
  TranslateXTransform,
  TranslateYTransform,
  Modal,
} from 'react-native';
import {compose, layout, space} from 'styled-system';

const Container = styled(Animated.View)<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: ${theme.sizes[13]};
  padding-left: ${theme.space[2]};
  padding-right: ${theme.space[2]};
  border-radius: ${theme.radii[2]};
  background-color:${({mode}) =>
    mode === 'dark' ? theme.colors.black[0] : theme.colors.white[0]}
  shadow-color: ${({mode}) =>
    mode === 'dark' ? theme.colors.white[0] : theme.colors.black[0]};
  shadow-offset: 1px 20px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  position:absolute; 
 bottom:5%;
  ${compose(space, layout)}

`;

const ContentWrapper = styled(Flex)<ContentWrapperProps>`
  flex-direction: row;
  align-items: center;
`;

const Label = styled(Text)<LabelProps>``;

const translateValue: {
  top: string;
  bottom: string;
  left: string;
  right: string;
} = {
  top: 'translateY',
  bottom: 'translateY',
  left: 'translateX',
  right: 'translateX',
};

const translateInitialValue = {
  top: Dimensions.get('window').height,
  bottom: -Dimensions.get('window').height,
  left: Dimensions.get('window').width,
  right: -Dimensions.get('window').width,
};

export const CloseButton = styled(IconButton)`
  width: ${theme.sizes[7]};
  height: ${theme.sizes[6]};
  border-radius: 0px;
`;

const getTranslate = (
  position: keyof typeof translateValue,
  translateAnimation: Animated.Value,
): TranslateXTransform | TranslateYTransform => {
  const translate = {[translateValue[position]]: translateAnimation};
  return translate as unknown as TranslateXTransform | TranslateYTransform;
};

const Popup = ({
  label,
  position = 'left',
  severity,
  duration = 1000,
  delay = 5000,
  mode = 'light',
}: PopupProps) => {
  const [popupState, setPopupState] = useState<boolean>(true);
  const translateAnimation = new Animated.Value(
    translateInitialValue[position],
  );

  const hidePopup = () => {
    Animated.timing(translateAnimation, {
      toValue: translateInitialValue[position],
      duration,
      useNativeDriver: true,
    }).start(() => {
      setPopupState(false);
    });
  };

  //To handle showing popup with animation
  useEffect(() => {
    Animated.timing(translateAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [translateAnimation]);

  useEffect(() => {
    //To Auto-hide popup after duration

    const timer = setTimeout(() => {
      hidePopup();
    }, delay);

    // Clear the timer if the Popup is manually closed
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Modal animationType="slide" transparent={true} visible={popupState}>
      <Flex alignItems="center" height="100%" width="100%">
        <Container
          mode={mode}
          style={{
            transform: [getTranslate(position, translateAnimation)],
          }}>
          <ContentWrapper>
            {severity === 'success' ? (
              <SuccessCircleIcon />
            ) : severity === 'warning' ? (
              <WarningCircleIcon />
            ) : (
              <DangerCircleIcon />
            )}
            {label && (
              <Label color={mode === 'dark' ? 'white.0' : 'black.0'}>
                {label}
              </Label>
            )}
          </ContentWrapper>

          <CloseButton onPress={hidePopup}>
            <CloseIcon />
          </CloseButton>
        </Container>
      </Flex>
    </Modal>
  );
};

export default Popup;
