import RootNavigator from 'navigation/RootNavigator';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from 'styles/theme';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1, ...backgroundStyle}}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentContainerStyle={{flex: 1}}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
