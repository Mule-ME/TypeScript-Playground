import styled from 'styled-components/native';
import {
  CheckboxContainerProps,
  StyledCheckBoxProps,
  LabelProps,
  CheckboxProps,
} from './types';
import {theme} from 'styles/theme';
import {CheckIcon} from '../assets';
import {Flex, Button, Text} from 'app/components/blocks';

const CheckboxContainer = styled(Flex)<CheckboxContainerProps>`
  flex-direction: row;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

//TODO
//delay on checkbox while checked and unchecked

const StyledCheckBox = styled(Button)<StyledCheckBoxProps>`
  width: ${({size}) => (size ? theme.sizes[size] : theme.sizes[2])};
  height: ${({size}) => (size ? theme.sizes[size] : theme.sizes[2])};
  border: 1px solid
    ${({checked, disabled}) =>
      checked && !disabled
        ? theme.colors.primary[0]
        : disabled
        ? theme.colors.accent[1]
        : theme.colors.accent[2]};
  border-radius: ${theme.radii[0]};
  background-color: ${({disabled}) =>
    disabled == true ? theme.colors.accent[1] : theme.colors.white[0]};
`;

const Label = styled(Text)<LabelProps>`
  margin-left: ${theme.space[0]};
`;

const Checkbox = ({
  checked = false,
  disabled = false,
  error,
  fontSize,
  label,
  description,
  size = 2,
  onValueChange,
  ...rest
}: CheckboxProps) => {
  return (
    <CheckboxContainer disabled={disabled} {...rest}>
      <StyledCheckBox
        checked={checked}
        disabled={disabled}
        onPress={() => onValueChange()}
        size={size}>
        {checked && (
          <CheckIcon
            height={theme.sizes[size - 2]}
            width={theme.sizes[size - 2]}
          />
        )}
      </StyledCheckBox>
      <Flex>
        {label && (
          <Label color="black.0" fontSize={fontSize} lineHeight={'20px'}>
            {label}
          </Label>
        )}
        {description && (
          <Label color="black.1" fontSize={2}>
            {description}
          </Label>
        )}
        {error && (
          <Label color="error.0" fontSize={1}>
            {error}
          </Label>
        )}
      </Flex>
    </CheckboxContainer>
  );
};

export default Checkbox;
