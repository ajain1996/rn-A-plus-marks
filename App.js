import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AppStack from './app/Navigation/AppStack';
import AuthStack from './app/Navigation/AuthStack';
import { COLORS } from './app/Component/Constant/Color';
import Navigation from './app/Service/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './app/Service/Auth';
import { setUser } from './app/Redux/reducer/user';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  const dispatch = useDispatch();

  const { userData, login } = useSelector(state => state.User);

  const [loginChk, setLoginChk] = useState(true);

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    let data = await Auth.getAccount();
    console.log('data fetched: ', data);
    if (data !== null) {
      dispatch(setUser(data));
      setLoginChk(false);
    } else {
      setLoginChk(false);
    }
  }

  if (loginChk) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor={COLORS.darkBlue} barStyle="light-content" />
      <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
        <Stack.Navigator
          detachInactiveScreens={false}
          initialRouteName="Auth"
          screenOptions={{
            cardStyle: { backgroundColor: COLORS.white },
            gestureEnabled: true,
            backgroundColor: COLORS.button,
            gestureDirection: 'horizontal',
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          {!login
            ? <Stack.Screen name="Auth" component={AuthStack} />
            : <Stack.Screen name="AppStack" component={AppStack} />}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}