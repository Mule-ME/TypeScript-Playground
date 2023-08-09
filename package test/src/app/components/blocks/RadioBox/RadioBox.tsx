import styled from 'styled-components/native';
import {
  LabelProps,
  RadioGroupContainerProps,
  RadioGroupProps,
  RadioIndicatorWrapperProps,
  RadioOptionProps,
} from './types';
import {theme} from 'styles/theme';
import {Flex, Text, Button, Box} from 'app/components/blocks';

const RadioGroupContainer = styled(Box)<RadioGroupContainerProps>`
  gap: ${({gap}) => gap && theme.space[gap]};
`;

const RadioOption = styled(Flex)<RadioOptionProps>`
  flex-direction: row;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const RadioIndicatorWrapper = styled(Button)<RadioIndicatorWrapperProps>`
justify-content: center;
align-items:center;
width: ${({size}) => (size ? theme.sizes[size] : theme.sizes[2])};
height: ${({size}) => (size ? theme.sizes[size] : theme.sizes[2])};
border-radius: ${theme.radii[2]};
background-color:${({disabled}) =>
  disabled ? theme.colors.accent[3] : theme.colors.white[0]}
border: 1px solid
    ${({checked, disabled}) =>
      checked
        ? theme.colors.primary[0]
        : disabled
        ? theme.colors.accent[2]
        : theme.colors.accent[2]};
`;

const RadioIndicator = styled(Flex)<RadioIndicatorWrapperProps>`
  width: ${({size}) => (size ? theme.sizes[size - 2] : theme.sizes[0])};
  height: ${({size}) => (size ? theme.sizes[size - 2] : theme.sizes[0])};
  border-radius: ${theme.radii[2]};
  background-color: ${({checked, disabled}) =>
    checked
      ? theme.colors.primary[0]
      : disabled
      ? theme.colors.accent[1]
      : theme.colors.white[0]};
`;

const Label = styled(Text)<LabelProps>`
  margin-left: ${theme.space[0]};
`;

const RadioGroup = ({
  fontSize,
  gap = 2,
  options,
  onValueChange,
  size = 2,
  value,
  ...rest
}: RadioGroupProps) => {
  return (
    <RadioGroupContainer gap={gap}>
      {options?.map((option: RadioOptionProps) => (
        <RadioOption
          checked={option?.value === value}
          disabled={option?.disabled}
          key={option?.value}
          value={option?.value}
          {...rest}>
          <RadioIndicatorWrapper
            checked={option?.value === value}
            disabled={option.disabled}
            onPress={() => onValueChange && onValueChange(option?.value)}
            size={size}>
            <RadioIndicator
              checked={option?.value === value}
              disabled={option?.disabled}
              size={size}
            />
          </RadioIndicatorWrapper>
          <Flex>
            {option?.label && (
              <Label color="black.0" fontSize={fontSize} lineHeight={'20px'}>
                {option?.label}
              </Label>
            )}
            {option?.description && (
              <Label color="black.1" fontSize={2}>
                {option?.description}
              </Label>
            )}
            {option?.error && (
              <Label color="error.0" fontSize={1}>
                {option?.error}
              </Label>
            )}
          </Flex>
        </RadioOption>
      ))}
    </RadioGroupContainer>
  );
};

export default RadioGroup;
