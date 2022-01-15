import EStyleSheet from 'react-native-extended-stylesheet';
import FlashMessage from 'react-native-flash-message';
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';

import AppNavigator from '@navigation/AppNavigator';
import theme from '@theme';
import {navigationRef, isReadyRef} from '@navigation/navigationService';
import {configureAxios} from '@api/axios';

EStyleSheet.build({$rem: Platform.OS === 'ios' ? 1.1 : 0.95});
configureAxios();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
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
