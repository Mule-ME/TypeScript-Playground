import React from 'react';
import styled from 'styled-components/native';
import {
  ViewProps,
  GestureResponderEvent,
  PressableProps,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInputFocusEventData,
} from 'react-native';
import {theme} from 'styles/theme';
import {
  DownArrowIcon,
  UpArrowIcon,
  CheckedIcon,
  CheckIcon,
} from 'app/components/blocks/assets';

//
import {TextInput} from '../TextInput';
import {OptionProps, SelectorProps} from './type';
import Text from '../Typography';
import {Box, Flex} from '../basics';
import {compose, boxShadow} from 'styled-system';
import {BoxProps} from '../basics/types';

const SelectorContainer = styled(Box)<BoxProps>`
  position: relative;
  box-sizing: border-box;
`;

const OptionsContainer = styled(Flex)<ViewProps>`
  position: absolute;
  content: '';
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 95%;
  overflow: hidden;
  z-index: 10;
  padding-bottom: ${theme.space[0]};
  border: 0.5px solid ${theme.colors.black[1]};
  background-color: ${theme.colors.white[0]};
  border-bottom-right-radius: ${theme.radii[1]};
  border-bottom-left-radius: ${theme.radii[1]};
  ${compose(boxShadow)}
`;

const OptionsItem = styled.Pressable<
  {selected: boolean; isLastItem: boolean} & PressableProps
>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: ${theme.space[0]};
  padding-right: ${theme.space[0]};
  background-color: ${props =>
    props.selected ? theme.colors.white[4] : theme.colors.white[0]};
  border-bottom-right-radius: ${props =>
    props.isLastItem ? theme.radii[1] : 0};
  border-bottom-left-radius: ${props =>
    props.isLastItem ? theme.radii[1] : 0};
`;

const Selector = ({
  defaultValue,
  options = [],
  value,
  startAdornment,
  disabled,
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
  passwordRules,
  secureTextEntry,
  onValueChange,
  ...otherProps
}: SelectorProps) => {
  const [selected, setSelected] = React.useState<OptionProps | undefined>(
    defaultValue,
  );
  const [opened, setOpened] = React.useState(false);
  const [isTextInputFocused, setIsTextInputFocused] =
    React.useState<boolean>(false);

  const handleSelect = (event: GestureResponderEvent, value: OptionProps) => {
    event.preventDefault();
    setSelected(value);
    setOpened(false);

    if (onValueChange) onValueChange(value);
  };

  const handleSelectorPressed = React.useCallback(
    (event: NativeSyntheticEvent<NativeTouchEvent>) => {
      event.preventDefault();

      if (isTextInputFocused && !opened) {
        setOpened(true);
      }
      if (opened) {
        setOpened(false);
      }
    },
    [opened, isTextInputFocused],
  );
  const handleOnBlur = React.useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      event.preventDefault();
      setOpened(false);
      setIsTextInputFocused(false);
    },
    [],
  );
  const handleOnFocus = React.useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      event.preventDefault();

      setOpened(true);
      setIsTextInputFocused(true);
    },
    [],
  );

  return (
    <SelectorContainer width={'100%'} zIndex={opened ? 10 : 0} {...otherProps}>
      <TextInput
        allowFontScaling={allowFontScaling}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        borderBottomLeftRadius={opened ? 0 : undefined}
        borderBottomRightRadius={opened ? 0 : undefined}
        caretHidden={true}
        disabled={disabled}
        endAdornment={opened ? <UpArrowIcon /> : <DownArrowIcon />}
        error={error}
        helperText={!opened ? helperText : undefined}
        keyboardType={keyboardType}
        label={label}
        maxLength={maxLength}
        multiline={multiline}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onPressIn={handleSelectorPressed}
        passwordRules={passwordRules}
        placeholder={placeholder || 'Select something ...'}
        secureTextEntry={secureTextEntry}
        showSoftInputOnFocus={false}
        startAdornment={startAdornment}
        value={value ? value.label : selected?.label}
      />
      {opened && (
        <OptionsContainer>
          {options.map((option, index) => {
            const isLastItem = options.length - 1 == index;
            const isSelected = selected
              ? selected.value === option.value
              : false;
            return (
              <OptionsItem
                isLastItem={isLastItem}
                key={index}
                onPress={(event: GestureResponderEvent) => {
                  handleSelect(event, option);
                }}
                selected={isSelected}>
                <CheckedIcon />
                <Text style={{flex: 1}}>{option.label}</Text>
                {isSelected && <CheckIcon />}
              </OptionsItem>
            );
          })}
        </OptionsContainer>
      )}
    </SelectorContainer>
  );
};

export default Selector;
