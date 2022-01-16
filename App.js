import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import FlashMessage from 'react-native-flash-message';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';

import AppNavigator from '@navigation/AppNavigator';
import theme from '@theme';
import screenNames from '@navigation/screenNames';
import {navigationRef, isReadyRef} from '@navigation/navigationService';
import {configureAxios} from '@api/axios';

dayjs.extend(duration);
configureAxios();

const config = {
  screens: {
    [screenNames.Playlists]: 'callback/:query_string',
  },
};

const linking = {
  prefixes: ['spotifydemoapp://'],
  config,
};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}
          linking={linking}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeProvider>
      <FlashMessage position="top" animated={true} />
    </>
  );
};

export default App;
