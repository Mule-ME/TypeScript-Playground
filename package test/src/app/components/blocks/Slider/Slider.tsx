import React, {useState} from 'react';
import {theme} from 'styles/theme';
import {Flex} from 'app/components/blocks';
import {SliderProps} from './type';
import {Slider as SliderMain} from '@miblanchard/react-native-slider';
import {LabelStyled, NotchStyled, TextLabel} from './SliderContainer';

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  handleValueChange,
  step,
  mode = 'light',
  disableRange,
  variant = 'md',
}) => {
  const size = variant === 'sm' ? 18 : variant === 'lg' ? 22 : 20;
  const color =
    mode === 'light' ? theme.colors.primary[0] : theme.colors.blue[0];

  const trackStyle = {
    borderRadius: 5,
    height: variant === 'sm' ? 6 : variant === 'lg' ? 10 : 8,
  };

  const thumbStyle = {
    borderColor: color,
    borderWidth: 1,
    backgroundColor: '#fff',
    height: size,
    width: size,
    borderRadius: 12,
  };

  //Indicator component
  const renderAboveThumbComponent = (value: number, index: number) => {
    return (
      <Flex alignItems="center">
        <LabelStyled max={max} min={min} pointer={index}>
          <TextLabel>{` ${index}%`}</TextLabel>
        </LabelStyled>
        <NotchStyled max={max} min={min} pointer={index} />
      </Flex>
    );
  };

  const [normalSliderValue, setNormalSliderValue] = useState<number | number[]>(
    disableRange ? [min] : [0],
  );
  const [rangeSliderValue, setRangeSliderValue] = useState<number | number[]>(
    !disableRange ? [min, max] : [0, max],
  );

  return disableRange ? (
    <SliderMain
      animateTransitions={true}
      key={disableRange ? 'single' : 'range'}
      maximumTrackTintColor={theme.colors.accent[3]}
      maximumValue={max}
      minimumTrackTintColor={color}
      minimumValue={min}
      onValueChange={value => {
        setNormalSliderValue(value);
        handleValueChange(value);
      }}
      renderAboveThumbComponent={renderAboveThumbComponent}
      step={step}
      thumbStyle={thumbStyle}
      trackClickable
      trackStyle={trackStyle}
      value={normalSliderValue}
    />
  ) : (
    <SliderMain
      animateTransitions={true}
      key={disableRange ? 'single' : 'range'}
      maximumTrackTintColor={theme.colors.accent[3]}
      maximumValue={max}
      minimumTrackTintColor={color}
      minimumValue={min}
      onValueChange={value => {
        setRangeSliderValue(value);
        handleValueChange(value);
      }}
      renderAboveThumbComponent={renderAboveThumbComponent}
      step={step}
      thumbStyle={thumbStyle}
      trackClickable
      trackStyle={trackStyle}
      value={rangeSliderValue}
    />
  );
};

export default Slider;
