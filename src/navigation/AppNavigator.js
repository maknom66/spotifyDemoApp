import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Playlists from '@screens/Playlists';
import screenNames from '@navigation/screenNames';
import Tracks from '@screens/Tracks';
import Track from '@screens/Track';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.Playlists} component={Playlists} />
      <Stack.Screen name={screenNames.Tracks} component={Tracks} />
      <Stack.Screen name={screenNames.Track} component={Track} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
