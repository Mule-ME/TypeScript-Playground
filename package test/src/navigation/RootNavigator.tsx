import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from 'app/screens/HomeScreen';
import DesignSystemScreen from 'app/screens/DesignSystemScreen';
import {RootStack, RouteNames} from '.';
import BottomBar from './BottomBar';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={RouteNames.DesignSystem}
        tabBar={props => <BottomBar {...props} />}>
        <RootStack.Screen component={HomeScreen} name={RouteNames.Home} />
        <RootStack.Screen
          component={DesignSystemScreen}
          name={RouteNames.DesignSystem}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
