import React from 'react';
import styled from 'styled-components/native';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
} from 'react-native';

import {
  border,
  borderRadius,
  boxShadow,
  compose,
  layout,
  position,
  space,
  variant,
} from 'styled-system';
import {theme} from 'styles/theme';

//
import {
  StyledTextInputProps,
  TextInputContainerProps,
  TextInputProps,
} from './types';
import {Flex} from '../basics';
import {TextProps} from '../Typography/types';

const TextInputContainer = styled.View<TextInputContainerProps>`
  font-family: Sora-Regular;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${theme.sizes[10]};
  color: ${theme.colors.error[0]};
  background-color: ${props => {
    if (props?.error) return theme.colors.error[1];
    else if (props?.isActive) return theme.colors.white[2];
    return theme.colors.white[1];
  }};
  padding: ${theme.space[0]} ${theme.space[2]};
  gap: ${theme.space[0]};
  border-radius: ${theme.radii[2]};
  opacity: ${props => {
    if (props?.disabled) return 0.2;
    return 1;
  }};
  ${props => {
    if (props.isTyping) {
      return {border: `1px solid ${theme.colors.black[1]}`};
    }
  }}
  ${compose(space, layout, border, borderRadius, boxShadow, position)}
    ${variant({
    prop: 'size',
    variants: {
      lg: {
        height: theme.sizes[9],
        width: '100%',
      },
      sm: {},
    },
  })};
`;

const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  font-family: Sora-Regular;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${props =>
    props?.error ? theme.colors.error[0] : theme.colors.black[0]};
  opacity: ${props => {
    if (props?.isActive) return 1;
    else if (props?.disabled == true) return 1;
    return 0.6;
  }};
  padding-bottom: 0;
  padding-top: 0;

  ${variant({
    prop: 'size',
    variants: {
      lg: {
        fontSize: theme.fontSizes[6],
      },
      sm: {},
    },
  })};
`;

const HelperText = styled.Text<TextProps & {error?: boolean}>`
  color: ${props =>
    props?.error ? theme.colors.error[0] : theme.colors.black[0]};
  font-size: ${theme.fontSizes[1]};
  opacity: 0.6;
`;

const LabelText = styled.Text<TextProps & {error?: boolean}>`
  font-weight: 700;
  font-size: ${theme.fontSizes[1]};
  ${props => {
    if (props?.error) {
      return {
        color: theme.colors.error[0],
        opacity: 1,
      };
    }
    return {
      color: theme.colors.black[0],
      opacity: 0.5,
    };
  }}
`;

const TextInput = ({
  startAdornment,
  endAdornment,
  value,
  disabled,
  editable,
  error,
  helperText,
  allowFontScaling,
  autoComplete,
  placeholder,
  keyboardType,
  multiline,
  maxLength,
  label,
  autoCapitalize,
  defaultValue,
  passwordRules,
  size = 'lg',
  style,
  showSoftInputOnFocus,
  caretHidden,
  secureTextEntry,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  onPressIn,
  onChangeText,
  ...otherProps
}: TextInputProps) => {
  const [isActive, setActive] = React.useState<boolean>(false);
  const [isTyping, setIsTyping] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (value && value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [value]);

  return (
    <Flex
      flexDirection={'column'}
      style={StyleSheet.flatten([style, {gap: 5}])}
      width={'100%'}
      {...otherProps}>
      {label && <LabelText error={error || false}>{label}</LabelText>}
      <TextInputContainer
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        disabled={disabled}
        error={error || false}
        isActive={isActive}
        isTyping={isTyping}
        size={size}>
        {startAdornment}

        <StyledTextInput
          allowFontScaling={allowFontScaling}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          caretHidden={caretHidden}
          defaultValue={defaultValue}
          disabled={disabled}
          editable={disabled ? false : editable}
          error={error || false}
          isActive={isActive}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          onBlur={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
            event.preventDefault();
            setIsTyping(false);
          }}
          onChangeText={onChangeText}
          onFocus={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
            event.preventDefault();
            setActive(true);
            setIsTyping(true);
            // if (onFocus) onFocus(event);
          }}
          onPressIn={onPressIn}
          passwordRules={passwordRules}
          placeholder={placeholder}
          placeholderTextColor={
            error ? theme.colors.error[0] : theme.colors.black[0]
          }
          secureTextEntry={secureTextEntry}
          showSoftInputOnFocus={showSoftInputOnFocus}
          size={size}
          value={value}
        />
        {endAdornment}
      </TextInputContainer>
      {helperText && (
        <HelperText error={error || false}>{helperText}</HelperText>
      )}
    </Flex>
  );
};
export default TextInput;
