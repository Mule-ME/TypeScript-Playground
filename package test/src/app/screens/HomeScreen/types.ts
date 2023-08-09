import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, RouteNames} from 'src/navigation';

export interface HomeScreenProps {}

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RouteNames.Home
>;
