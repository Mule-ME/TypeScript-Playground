// import {DesignSystemScreenProps} from './types';
import {
  Flex,
  Button,
  Text,
  IconButton,
  TextInput,
  Selector,
} from 'app/components/blocks';
import Checkbox from 'app/components/blocks/Checkbox';
import Tooltip from 'app/components/blocks/Tooltip';
import Slider from 'app/components/blocks/Slider';
import Divider from 'app/components/blocks/Divider';
import {OptionProps} from 'app/components/blocks/Selector/type';
import RadioGroup from 'app/components/blocks/RadioBox';
import {Modal, Popup} from 'app/components/blocks/Modals';
import {
  RightIcon,
  EditIcon,
  LockIcon,
  DatePickerIcon,
  HelpIcon,
} from 'app/components/blocks/assets';
import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';

const DesignSystemScreen = () => {
  //Checkbox state & state handler
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = React.useState<OptionProps | null>(null);

  const handleValueChange = () => {
    setIsChecked(!isChecked);
  };

  //Text input state
  const [text, setText] = React.useState('');

  //Radio button state and state handler and radio group options
  const [selectedValue, setSelectedValue] = useState('monthlySwap');
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  const optionsDefault = [
    {
      value: 'monthlySwap',
      disabled: false,
    },
    {label: 'Daily Swap', value: 'dailySwap', disabled: false},
    {
      label: '12hrs Swap',
      value: '12hrsSwap',
      disabled: false,
      description: 'Swapper lorem ipsum',
    },
  ];
  const optionsError = [
    {
      disabled: false,
      description: 'Swapper lorem ipsum',
      error: 'Not Avilable now',
      label: '12hrs Swap',
      value: '12hrsSwap',
    },
  ];
  const optionsDisable = [
    {
      value: 'monthlySwapDisable',
      disabled: true,
    },
    {disabled: true, label: 'Daily Swap', value: 'dailySwapDisable'},
    {
      disabled: true,
      description: 'Swapper lorem ipsum',
      error: 'Not Avilable now',
      label: '12hrs Swap',
      value: '12hrsSwapDisable',
    },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const handlePress = () => {
    setShowModal(!showModal);
  };

  //Slider component
  const [value, setValue] = useState<number[]>([0]);
  const handleSliderChange = (value: number[]) => {
    setValue(value);
  };
  console.log(value, 'from paren component low');

  return (
    <ScrollView>
      <Flex
        backgroundColor="white.0"
        flex={1}
        p={2}
        pt={5}
        width={Dimensions.get('window').width}>
        {/* Modals*/}
        <>
          <Text variant="h2">Modals</Text>
          <Text variant="subtitle1">Popups and Screen Overlays</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="row"
            flexWrap="wrap"
            mb={4}
            mt={2}
            pb={5}>
            {/*Popups with button*/}
            <Text mb={1} variant="subtitle2">
              Popups with buttons
            </Text>
            <Flex flexDirection="column" width="100%">
              <Text color="green" mb={1} variant="caption">
                Success
              </Text>
              {/* <Popup
                label="Payment was successful!"
                mb={3}
                position="top"
                severity="success"
              /> */}
              <Tooltip
                icon={<HelpIcon />}
                placement="right"
                text="Hello, world!">
                <Button m={1} variant="secondary">
                  <Text color="white.0" variant="button">
                    Secondary
                  </Text>
                </Button>
              </Tooltip>
              <Popup
                label="Payment was successful!"
                mode="dark"
                position="top"
                severity="success"
              />
            </Flex>
            {/* <Flex flexDirection="column" width="100%">
              <Text color="yellow" mb={1} variant="caption">
                Warning
              </Text>
              <Popup
                label="Payment is not complete!"
                position="right"
                severity="warning"
              />
              <Popup
                label="Payment is not complete!"
                mode="dark"
                position="right"
                severity="warning"
              />
            </Flex> */}
            {/* <Flex flexDirection="column" width="100%">
              <Text color="red" mb={1} variant="caption">
                Danger
              </Text>
              <Popup
                label="Payment has failed!"
                position="bottom"
                severity="danger"
              />

              <Popup
                label="Payment has failed!"
                mode="dark"
                position="bottom"
                severity="danger"
              />
            </Flex> */}

            {/*Popups with timer*/}
            {/* <Flex flexDirection="column" width="100%">
              <Text mb={1} variant="caption">
                Popups with timer
              </Text>

              <Popup
                delay={5000}
                duration={300}
                label="Payment was not successful!"
                position="left"
                severity="warning"
              />

              <Popup
                duration={300}
                label="Payment was not successful!"
                position="bottom"
                severity="success"
              />
            </Flex> */}

            {/*Screen overlays*/}
            <Text mb={1} variant="caption">
              Screen overlays with action
            </Text>
            {/* <Flex flexDirection="column" width="100%">
              <IconButton
                endIcon={<EditIcon />}
                height={9}
                m={1}
                onPress={handlePress}
                variant="primary"
                width={9}
              />
              <Modal
                content="consectetur adipiscing elit, sed do eiusm tempor consectetur adipiscing elit, sed do eiusmod tempor"
                direction="column"
                label="Swap Has been completed "
                onPress={handlePress}
                primary="Complete"
                secondary="Reject"
                show={showModal}
                variance="action"
              />
            </Flex> */}
            <Flex flexDirection="column" width="100%">
              <IconButton
                endIcon={<EditIcon />}
                height={9}
                m={1}
                onPress={handlePress}
                variant="primary"
                width={9}
              />
              <Modal
                content="consectetur adipiscing elit, sed do eiusm tempor consectetur adipiscing elit, sed do eiusmod tempor"
                direction="row"
                label="Swap Has been completed "
                onPress={handlePress}
                primary="Complete"
                secondary="Reject"
                show={showModal}
                variance="action"
              />
            </Flex>
            {/* <Flex flexDirection="column" width="100%">
              <Text mb={1} variant="caption">
                Screen overlays informative
              </Text>
              <IconButton
                endIcon={<EditIcon />}
                height={9}
                m={1}
                onPress={handlePress}
                variant="primary"
                width={9}
              />
              <Modal
                content="consectetur adipiscing elit, sed do eiusm tempor consectetur adipiscing elit, sed do eiusmod tempor"
                label="Swap Has been completed "
                onPress={handlePress}
                show={showModal}
                variance="info"
              />
            </Flex> */}
          </Flex>
        </>

        {/* Buttons  */}
        <>
          <Text variant="h2">Buttons</Text>
          <Text variant="subtitle2">Button variants as per the design</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="row"
            flexWrap="wrap"
            mb={4}
            pb={5}>
            {/* Primary  */}
            <Button m={1} variant="primary">
              <Text color="white.0" variant="button">
                Primary
              </Text>
            </Button>

            {/* Secondary  */}
            <Button m={1} variant="secondary">
              <Text color="white.0" variant="button">
                Secondary
              </Text>
            </Button>

            {/* Subtle  */}
            <Button m={1} variant="subtle">
              <Text variant="button">Subtle</Text>
            </Button>

            {/* Text  */}
            <Button m={1} variant="text">
              <Text variant="button">Text</Text>
            </Button>
          </Flex>

          {/* Iconed Buttons  */}
          <Text variant="h2">Iconed Buttons</Text>
          <Text variant="subtitle2">Button variants as per the design</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="row"
            flexWrap="wrap"
            mb={4}
            pb={5}>
            {/* Primary  */}
            <IconButton m={1} startIcon={<EditIcon />} variant="primary">
              <Text color="white.0" ml={0} variant="button">
                Left Icon
              </Text>
            </IconButton>

            {/* Secondary  */}
            <IconButton
              endIcon={<RightIcon color="white" />}
              m={1}
              variant="secondary">
              <Text color="white.0" variant="button">
                Right Icon
              </Text>
            </IconButton>

            {/* No Label  */}
            <IconButton
              endIcon={<EditIcon />}
              height={9}
              m={1}
              variant="primary"
              width={9}
            />

            {/* No Label  */}
            <IconButton
              endIcon={<RightIcon color="white" />}
              height={9}
              m={1}
              variant="secondary"
              width={9}
            />

            {/* No Label  */}
            <IconButton
              endIcon={<EditIcon />}
              height={9}
              m={1}
              variant="subtle"
              width={9}
            />
          </Flex>
        </>

        {/* Check Boxes*/}
        <>
          <Text variant="h2">Check Boxes</Text>
          <Text variant="subtitle2">Checkbox variants as per the design</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            mb={4}
            mt={2}
            pb={5}>
            {/*Active*/}
            <Text variant="caption">Active</Text>

            <Flex flexDirection="column" my={2}>
              <Checkbox
                checked={!isChecked}
                disabled={false}
                my={1}
                onValueChange={handleValueChange}
              />
              <Checkbox
                checked={!isChecked}
                disabled={false}
                label="Remember me"
                my={1}
                onValueChange={handleValueChange}
              />
              <Checkbox
                checked={!isChecked}
                description="Save my login details for next time."
                disabled={false}
                label="Remember me"
                my={1}
                onValueChange={handleValueChange}
              />
            </Flex>

            {/* Size and error */}
            <Text variant="caption">Size and error</Text>
            <Flex flexDirection="column" my={2}>
              <Checkbox
                checked={isChecked}
                disabled={false}
                my={1}
                onValueChange={handleValueChange}
                size={3}
              />
              <Checkbox
                checked={isChecked}
                disabled={false}
                label="Remember me"
                my={1}
                onValueChange={handleValueChange}
                size={4}
              />
              <Checkbox
                checked={isChecked}
                description="Save my login details for next time."
                disabled={false}
                error="This field is required"
                fontSize={3}
                label="Remember me"
                my={1}
                onValueChange={handleValueChange}
                size={5}
              />
            </Flex>
            {/*Disabled*/}
            <Text variant="caption">Disabled</Text>

            <Flex flexDirection="column" my={2}>
              <Checkbox
                checked={true}
                disabled={true}
                my={1}
                onValueChange={handleValueChange}
              />
              <Checkbox
                checked={true}
                disabled={true}
                label="Remember me"
                my={1}
                onValueChange={handleValueChange}
              />
              <Checkbox
                checked={true}
                description="Save my login details for next time."
                disabled={true}
                label="Remember me"
                my={1}
                onValueChange={handleValueChange}
              />
            </Flex>
          </Flex>
        </>

        {/*TextInput*/}
        <>
          <Text variant="h2">TextInput</Text>
          <Text variant="subtitle2">Input variants as per the design</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="row"
            flexWrap="wrap"
            // gap={20}
            mb={4}
            mt={4}
            pb={5}>
            {/* Default TexInput*/}
            <TextInput placeholder="PlaceHolder" />
            {/* HelperText TexInput*/}
            <TextInput
              helperText="helper text is here"
              placeholder="PlaceHolder"
            />
            {/* Label TexInput*/}
            <TextInput
              error
              helperText="helper text is here"
              label="Error"
              placeholder="PlaceHolder"
            />
            {/* Controlled TexInput*/}
            <Flex
              alignItems={'center'}
              flexDirection={'row'}
              style={{width: '100%', gap: 10}}>
              <TextInput
                helperText="helper text is here"
                label="Controlled"
                onChangeText={(text: string) => setText(text)}
                placeholder="PlaceHolder"
                value={text}
                width={'50%'}
              />
              <Text
                // flex={1}
                numberOfLines={1}>
                {text.length > 0 ? text : 'Text goes here'}
              </Text>
            </Flex>

            {/* password TexInput*/}
            <TextInput
              helperText="helper text is here"
              label="StartIcon"
              placeholder="Enter password"
              secureTextEntry={true}
              startAdornment={<LockIcon />}
            />
            {/* Disabled TexInput*/}
            <TextInput
              disabled={true}
              helperText="helper text is here"
              label="Disabled"
              placeholder="PlaceHolder"
              startAdornment={<LockIcon />}
            />
            {/* Start Icon TexInput*/}
            <TextInput
              helperText="helper text is here"
              label="StartIcon"
              placeholder="PlaceHolder"
              startAdornment={<LockIcon />}
            />
            {/* End Icon TexInput*/}
            <TextInput
              endAdornment={<DatePickerIcon />}
              helperText="helper text is here"
              label="end Icon"
              placeholder="PlaceHolder"
              startAdornment={<LockIcon />}
            />
            {/* Start Text TexInput*/}
            <TextInput
              helperText="helper text is here"
              keyboardType="phone-pad"
              label="Start Text Icon"
              placeholder="PlaceHolder"
              startAdornment={<Text> +251</Text>}
            />
          </Flex>
        </>

        {/*Selector*/}
        <>
          <Text variant="h2">Selector</Text>
          <Text variant="subtitle2">Input variants as per the design</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="row"
            flexWrap="wrap"
            // gap={20}  // gap={20}  // gap={20}
            mb={10}
            mt={4}
            pb={5}>
            {/*Default*/}
            <Selector
              helperText="please select yout country"
              label="select your country"
              options={[
                {label: 'hello', value: 1},
                {label: 'eouro', value: 2},
              ]}
            />
            {/*Erro*/}
            <Selector
              error
              helperText="please select yout country"
              label="select your country"
              options={[
                {label: 'hello', value: 1},
                {label: 'eouro', value: 2},
              ]}
            />
            {/*Right Icon */}
            <Selector
              helperText="please select yout country"
              label="select your country"
              options={[
                {label: 'hello', value: 1},
                {label: 'eouro', value: 2},
              ]}
              startAdornment={<DatePickerIcon />}
            />
            {/*Disabled  */}
            <Selector
              disabled
              helperText="please select yout country"
              label="select your country"
              options={[
                {label: 'hello', value: 1},
                {label: 'eouro', value: 2},
              ]}
              startAdornment={<DatePickerIcon />}
            />
            {/*Controlled  */}

            <Flex
              alignItems={'center'}
              flexDirection={'row'}
              style={{width: '100%', gap: 10}}>
              <Selector
                helperText="please select yout country"
                label="Controlled"
                onValueChange={value => {
                  setSelected(value);
                }}
                options={[
                  {label: 'hello', value: 1},
                  {label: 'eouro', value: 2},
                ]}
                startAdornment={<DatePickerIcon />}
                width="50%"
              />
              <Text
                // flex={1}
                numberOfLines={1}>
                {selected ? selected.label : 'Values goes here'}
              </Text>
            </Flex>
          </Flex>
        </>

        {/* Radio Boxes*/}
        <>
          <Text variant="h2">Radio boxes</Text>
          <Text variant="subtitle2">
            Radio boxes variants as per the design
          </Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="row"
            flexWrap="wrap"
            mb={4}
            mt={2}
            pb={5}>
            {/*Active*/}

            <Flex flexDirection="column">
              <Text mb={1} variant="caption">
                Default
              </Text>

              <RadioGroup
                onValueChange={handleChange}
                options={optionsDefault}
                value={selectedValue}
              />
            </Flex>

            {/*Disabled*/}
            <Flex flexDirection="column">
              <Text mb={1} variant="caption">
                Disabled and Size
              </Text>

              <RadioGroup
                fontSize={3}
                onValueChange={handleChange}
                options={optionsDisable}
                size={4}
                value={selectedValue}
              />
            </Flex>
            {/* Size and error */}
            <Text mb={1} variant="caption">
              Error
            </Text>
            <Flex flexDirection="row">
              <RadioGroup
                onValueChange={handleChange}
                options={optionsError}
                size={5}
                value={selectedValue}
              />
            </Flex>
          </Flex>
        </>

        {/* Slider*/}
        <>
          <Text variant="h2">Sliders</Text>
          <Text variant="subtitle2">Slider variants as per the design</Text>
          <Flex
            borderBottomColor="accent.1"
            borderBottomWidth="1px"
            flexDirection="column"
            flexWrap="wrap"
            mb={4}
            mt={2}
            pb={5}>
            {/*Active*/}

            <Flex flexDirection="column">
              <Text mb={1} variant="caption">
                Default
              </Text>

              <Slider
                handleValueChange={handleSliderChange}
                max={10000}
                min={0}
                mode="light"
                step={10}
              />
            </Flex>

            {/*Darkmode*/}
            <Flex flexDirection="column" width="100%">
              <Text mb={1} variant="caption">
                Dark mode
              </Text>

              <Slider
                handleValueChange={handleSliderChange}
                max={10000}
                min={0}
                mode="dark"
                step={10}
              />
            </Flex>
            <Divider
              color="red"
              orientation="vertical"
              size={6}
              thickness={3}
            />
            <Divider
              color="green"
              orientation="horizontal"
              size={60}
              thickness={3}
            />
            <Flex mt={20}>
              <Slider
                disableRange={false}
                handleValueChange={handleSliderChange}
                max={100}
                min={0}
                mode="light"
                step={1}
              />
            </Flex>
            <Flex mt={20}>
              <Slider
                disableRange={true}
                handleValueChange={handleSliderChange}
                max={100}
                min={0}
                mode="dark"
                step={1}
              />
            </Flex>
          </Flex>
        </>
      </Flex>
    </ScrollView>
  );
};

export default DesignSystemScreen;
