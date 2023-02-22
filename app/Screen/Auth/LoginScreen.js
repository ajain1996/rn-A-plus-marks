import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { COLORS, SIZES } from '../../Component/Constant/Color';
import Navigation from '../../Service/Navigation';
import LoginTextInput from './LoginTextInput';
import CustomButton from '../../Component/CustomButton';
import NewUser from './NewUser';
import AuthLogo from './AuthLogo';

function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');

  const loginUser = async () => {
    if (email?.length === 0) {
      alert('Please fill in email field');
      console.log("\n\n please fill in email field")
    } else {
      navigation.replace("Root")
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        hidden={false}
      />
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View style={{ justifyContent: "space-between", height: SIZES.height, backgroundColor: "#fff" }}>
          <View style={{ position: "absolute", top: -44, left: 0 }}>
            <Image
              source={require("../../Assets/registration.png")}
              resizeMode="contain"
              style={{ width: 220, height: 220 }}
            />
          </View>
          {/* <LoginBgTop /> */}
          <View style={{ justifyContent: 'space-evenly', alignItems: 'center', height: "100%" }}>
            <AuthLogo text="Welcome to A+ Marks" />
            <View style={styles.inputWrapper}>
              <Text />
              <LoginTextInput
                placeholder="Enter Email or Phone Number"
                keyboardType="email-address"
                onChange={value => {
                  setEmail(value);
                }}
                value={email}
              />
              <Text />

              <CustomButton
                text="Login Now"
                fw="600" fs={16}
                textColor={COLORS.white}
                onPress={loginUser}
                buttonStyle={styles.btn}
                underlayColor="#fff"
              />

              <NewUser
                text1="New user?"
                text2="Register Now"
                onPress={() => { Navigation.navigate('RegisterScreen') }}
              />
            </View>
          </View>
          {/* <RegisterBgTop /> */}
        </View>
      </ScrollView>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.theme,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    // backgroundColor: '#fff',
    width: '92%',
    // borderRadius: 15,
    paddingHorizontal: 8
  },
  Login: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: "500",
    color: "#000",
    marginTop: 10,
  },
});