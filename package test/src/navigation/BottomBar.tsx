import {Flex, Text, IconButton} from 'app/components/blocks';
import {AlertIcon} from 'app/components/blocks/assets';
import {Dimensions} from 'react-native';
import {theme} from 'styles/theme';
import {BottomBarProps} from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BottomBar = (props: BottomBarProps) => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="accent.1"
      flexDirection="row"
      height="70px"
      p={3}
      position="relative"
      width={Dimensions.get('window').width}>
      {/* Icons  */}
      <IconButton
        alignItems="center"
        backgroundColor={theme.colors.accent[1]}
        bottom={1}
        display="flex"
        flexDirection="column"
        height={16}
        position="absolute"
        right={0}
        width={16}>
        <AlertIcon />
        <Text fontSize={[3]}>alerts</Text>
      </IconButton>
    </Flex>
  );
};

export default BottomBar;
