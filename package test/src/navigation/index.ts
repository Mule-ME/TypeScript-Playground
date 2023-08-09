import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export enum RouteNames {
  Home = 'Home',
  DesignSystem = 'DesignSystem',
}

export type RootStackParamList = {
  Home: undefined; // Component has no params
  DesignSystem: undefined;
};

export const RootStack = createBottomTabNavigator<RootStackParamList>();
