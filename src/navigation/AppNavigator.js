import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Temp from '@screens/temp';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Temp" component={Temp} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
