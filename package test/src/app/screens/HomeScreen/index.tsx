import * as React from 'react';
// import {HomeScreenProps} from './types';
import {Box} from 'app/components/blocks';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProps} from './types';
import {RouteNames} from '../../../navigation';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  React.useEffect(() => {
    navigation.navigate(RouteNames.DesignSystem);
  }, []);
  return <Box />;
};
