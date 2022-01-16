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

// spotifydemoapp://callback/#access_token=BQAxLCHvqbMXpUOqjOCeiLDHIXWH64yuvc3E-3EQ96UJEvqotpG4MFdk-ka1vSvH6PjyV1Sg3amjpxwM3BlRSi1NaTufrO6vJCO_o1QlDqm5VA6DnFrBVfoA6osEvEtc8rs3Co3JJwZ7wL0FaylHxQBoTjfmIdDCtIfdnOzHxkgzzq7h&token_type=Bearer&expires_in=3600

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
