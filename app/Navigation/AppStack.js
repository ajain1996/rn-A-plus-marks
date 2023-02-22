import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Component/Constant/Color';
import HomeScreen from '../Screen/Home/HomeScreen';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: COLORS.button },
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
