import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { COLORS, SIZES } from '../../Component/Constant/Color';
import Navigation from '../../Service/Navigation';
import LoginTextInput from './LoginTextInput';
import CustomButton from '../../Component/CustomButton';
import NewUser from './NewUser';
import AuthLogo from './AuthLogo';

function RegisterScreen({ navigation }) {

  const [name, setName] = useState('');
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
          <View style={{ marginTop: "28%" }}>
            <AuthLogo text="Start your journey with A+ Marks" />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "8%" }}>
              <View style={styles.inputWrapper}>
                <Text />
                <LoginTextInput
                  placeholder="Enter Full Name"
                  onChange={value => {
                    setName(value);
                  }}
                  value={name}
                />

                <LoginTextInput
                  placeholder="Enter Email or Phone Number"
                  keyboardType="email-address"
                  onChange={value => {
                    setEmail(value);
                  }}
                  value={email}
                />

                <LoginTextInput
                  placeholder="Date of birth"
                  onChange={value => {
                    setEmail(value);
                  }}
                  value={email}
                />

                <LoginTextInput
                  placeholder="State"
                  onChange={value => {
                    setEmail(value);
                  }}
                  value={email}
                />

                <LoginTextInput
                  placeholder="Number of previous attempts"
                  onChange={value => {
                    setEmail(value);
                  }}
                  value={email}
                />

                <LoginTextInput
                  placeholder="Language"
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
                  text1="Already a user?"
                  text2="Login Now"
                  onPress={() => { Navigation.navigate('LoginScreen') }}
                />
              </View>
            </View>
          </View>
          {/* <RegisterBgTop /> */}
        </View>
      </ScrollView>
    </>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.theme,
    width: '70%',
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
// import React, { useState } from 'react';
// import {
//   StatusBar,
//   Text,
//   View,
//   StyleSheet,
// } from 'react-native';
// import { COLORS } from '../../Component/Constant/Color';
// import { FONTS } from '../../Component/Constant/Font';
// import Navigation from '../../Service/Navigation';
// import UpperCard from './UpperCard';
// import LoginTextInput from './LoginTextInput';
// import CustomButton from '../../Component/CustomButton';
// import NewUser from './NewUser';

// function RegisterScreen({ navigation }) {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const registerUser = async () => {
//     if (name?.length === 0 || email?.length === 0) {
//       alert('Please fill in all the fields');
//       console.log("\n\n please fill in all the field")
//     } else {
//       navigation.navigate("Root")
//     }
//   }

//   return (
//     <>
//       <StatusBar
//         backgroundColor={COLORS.theme}
//         barStyle="light-content"
//         hidden={false}
//       />
//       <View style={{ justifyContent: "space-between", height: "95%" }}>
//         <UpperCard
//           image={require("../../Assets/app-logo.jpg")}
//           text="Start your journey with A+ Marks"
//         />
//         <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
//           <View style={styles.inputWrapper}>
//             <View style={styles.cardView}>
//               <Text style={styles.Login}>Register</Text>
//               <Text />
//               <LoginTextInput
//                 placeholder="Enter Full Name"
//                 onChange={value => {
//                   setName(value);
//                 }}
//                 value={name}
//               />

//               <LoginTextInput
//                 placeholder="Enter Email or Phone Number"
//                 keyboardType="email-address"
//                 onChange={value => {
//                   setEmail(value);
//                 }}
//                 value={email}
//               />

//               <LoginTextInput
//                 placeholder="Date of birth"
//                 onChange={value => {
//                   setEmail(value);
//                 }}
//                 value={email}
//               />

//               <LoginTextInput
//                 placeholder="State"
//                 onChange={value => {
//                   setEmail(value);
//                 }}
//                 value={email}
//               />

//               <LoginTextInput
//                 placeholder="Number of previous attempts"
//                 onChange={value => {
//                   setEmail(value);
//                 }}
//                 value={email}
//               />

//               <LoginTextInput
//                 placeholder="Language"
//                 onChange={value => {
//                   setEmail(value);
//                 }}
//                 value={email}
//               />
//               <Text />

//               <CustomButton
//                 text="Login Now"
//                 fw="600" fs={16}
//                 textColor={COLORS.white}
//                 onPress={registerUser}
//                 buttonStyle={styles.btn}
//                 underlayColor="#fff"
//               />

//               <NewUser
//                 text1="Already a user?"
//                 text2="Login Now"
//                 onPress={() => { Navigation.navigate('RegisterScreen') }}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// }

// export default RegisterScreen;

// const styles = StyleSheet.create({
//   inputWrapper: {
//     backgroundColor: '#fff',
//     width: '92%',
//     borderRadius: 15,
//     marginHorizontal: 18
//   },
//   inputs: {
//     borderBottomColor: COLORS.white,
//     flex: 1,
//     color: COLORS.liteBlack,
//     paddingLeft: 10,
//     fontFamily: FONTS.Regular,
//     paddingLeft: 20
//   },
//   inputContainer: {
//     borderRadius: 30,
//     height: 48,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: 10,
//     elevation: 2,
//   },
//   inputIconView: {
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: COLORS.theme,
//     height: '100%',
//     borderRadius: 30,
//     alignSelf: 'center',
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//     elevation: 2,
//   },
//   smallTxt: {
//     fontSize: 13,
//     color: COLORS.black,
//     fontFamily: FONTS.Regular,
//     marginTop: 10,
//     opacity: .5,
//     textAlign: 'center',
//   },
//   register: {
//     fontSize: 13,
//     fontFamily: FONTS.SemiBold,
//     marginTop: 12,
//     textAlign: 'center',
//     color: COLORS.textInput,
//     textDecorationLine: 'underline'
//   },
//   contactView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   btnText: {
//     color: '#fff',
//     fontFamily: FONTS.SemiBold,
//     fontSize: 14,
//     marginTop: 2,
//   },
//   btn: {
//     backgroundColor: COLORS.theme,
//     width: '100%',
//     height: 50,
//     borderRadius: 30,
//     elevation: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Login: {
//     alignSelf: 'center',
//     fontSize: 28,
//     fontWeight: "500",
//     color: "#000",
//     marginTop: 10,
//   },
//   cardView: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     paddingBottom: 20,
//     paddingTop: 20,
//   }
// });