import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Component/Constant/Color';
import LoginScreen from '../Screen/Auth/LoginScreen';
import RegisterScreen from '../Screen/Auth/RegisterScreen';
import BottomTabs from '../bottom_tabs/BottomTabs';
import ForgotPasswordScreen from '../Screen/Auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../Screen/Auth/ResetPasswordScreen';
import MockTestDetailScreen from '../Screen/mock_test/MockTestDetailScreen';
import ProfileScreen from '../Screen/profile/ProfileScreen';
import HomeScreen from '../Screen/Home/HomeScreen';
import MockListingsScreen from '../Screen/listings/MockListingsScreen';
import MockTestPageScreen from '../Screen/mock_test/MockTestPageScreen';
import MockTestPageScreen2 from '../Screen/mock_test/MockTestPageScreen2';
import PrivacyPolicyScreen from '../Screen/policy/PrivacyPolicyScreen';
import TermsAndConditionsScreen from '../Screen/policy/TermsAndConditionsScreen';
import AboutUsScreen from '../Screen/policy/AboutUsScreen';
import BuyNowScreen from '../Screen/buy/BuyNowScreen';
import ReportsScreen from '../Screen/reports/ReportsScreen';
import OrdersScreen from '../Screen/orders/OrdersScreen';
import IntroScreen from '../Screen/intro/IntroScreen';
import Auth from '../Service/Auth';
import QuestionScreen from '../Screen/questions/QuestionScreen';
import AnswersScreen from '../Screen/questions/AnswersScreen';
import ExamsScreen from '../Screen/questions/ExamsScreen';
import PreviousYearMockScreen from '../Screen/questions/PreviousYearMockScreen';

const Stack = createStackNavigator();

export default function AuthStack() {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  React.useEffect(() => {
    Auth.getIntro().then(value => {
      console.log('value: ', value);
      if (value == null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch.toString() === 'true') {
    routeName = 'IntroScreen';
  } else {
    routeName = 'LoginScreen';
  }


  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName={routeName}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="Root" component={BottomTabs} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MockTestDetailScreen" component={MockTestDetailScreen} />
      <Stack.Screen name="MockTestPageScreen2" component={MockTestPageScreen2} />
      <Stack.Screen name="MockTestPageScreen" component={MockTestPageScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MockListingsScreen" component={MockListingsScreen} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="BuyNowScreen" component={BuyNowScreen} />
      <Stack.Screen name="ReportsScreen" component={ReportsScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="AnswersScreen" component={AnswersScreen} />
      <Stack.Screen name="ExamsScreen" component={ExamsScreen} />
      <Stack.Screen name="PreviousYearMockScreen" component={PreviousYearMockScreen} />
    </Stack.Navigator>
  );
}
