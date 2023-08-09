import React, { memo, useCallback } from "react";
import styled from "styled-components";
import RangeSlider from "rn-range-slider";
import { theme } from "styles/theme";
import { Flex, Text } from "app/components/blocks";
import { LabelProps, SliderProps, ThemeProps } from "./type";
import { Slider } from "@miblanchard/react-native-slider";

const LabelStyled = styled(Flex)<ThemeProps>`

  align-items: center;
  min-height:${theme.sizes[5]};
  min-width: ${theme.sizes[5]};
  padding: ${theme.space[1]};
  background-color: ${theme.colors.white[0]};
  border-radius: 5px;
  background-color:${theme.colors.white[0]}
  shadow-color: ${({ mode }) =>
    mode === "dark" ? theme.colors.white[0] : theme.colors.blue[0]};
  shadow-offset: 1px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
 
`;

// position: absolute;
// bottom: 100%;
const NotchStyled = styled(Flex)<ThemeProps>`
  margin-bottom: 1px;
  width: ${theme.sizes[1]};
  height: ${theme.sizes[1]};
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${theme.colors.white[0]};
  border-left-width: ${theme.space[0]};
  border-right-width: ${theme.space[0]};
  border-top-width: ${theme.sizes[1]};
`;

// position: absolute;
// margin-left: ${theme.space[7]};

const RailStyled = styled(Flex)<ThemeProps>`
  height: ${theme.sizes[1]};
  border-radius: 2px;
  background-color: ${theme.colors.accent[3]};
  width: 100%;
`;
const RailSelectedStyled = styled(Flex)<ThemeProps>`
  height: 8px;
  background-color: ${({ mode }) =>
    mode === "dark" ? theme.colors.blue[0] : theme.colors.primary[0]};
  border-radius: 2px;
`;

const ThumbStyled = styled(Flex)<ThemeProps>`
  width: 20px;
  height: 20px;
  border-radius: 12px;
  border: 1px solid
    ${({ mode }) =>
      mode === "dark" ? theme.colors.blue[0] : theme.colors.primary[0]};
  background-color: ${theme.colors.white[0]};
`;

const TextLabel = styled(Text)`
  font-size: 16px;
`;

const Label = memo((props: LabelProps) => {
  return (
    <LabelStyled>
      <TextLabel>{`${props.title}%`}</TextLabel>
    </LabelStyled>
  );
});

const Notch = memo(() => {
  return <NotchStyled />;
});

const Rail = memo((props) => {
  return <RailStyled {...props} />;
});

const RailSelected = memo(({ mode }: ThemeProps) => {
  return <RailSelectedStyled mode={mode} />;
});

const Thumb = memo(({ mode }: ThemeProps) => {
  return <ThumbStyled mode={mode} />;
});

const renderAboveThumbComponent = () => {
  return <RailStyled />;
};

const Sliders = ({
  min = 0,
  max = 100,
  handleValueChange,
  step = 10,
  mode = "light",
  disableRange = false,
}: SliderProps) => {
  const renderThumb = useCallback(() => <Thumb mode={mode} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(
    () => <RailSelected mode={mode} />,
    []
  );
  const renderLabel = useCallback(
    (value: number) => <Label mode={mode} title={value} />,
    []
  );
  const renderNotch = useCallback(() => <Notch />, []);

  return (
    <RangeSlider
      disableRange={disableRange}
      max={max}
      min={min}
      minRange={1}
      onValueChanged={handleValueChange}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderThumb={renderThumb}
      step={step}
    />
  );
};

export default Sliders;
