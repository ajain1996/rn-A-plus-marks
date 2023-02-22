import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screen/Home/HomeScreen';
import { COLORS, SIZES } from '../Component/Constant/Color';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreen from '../Screen/profile/ProfileScreen';
import MockListingsScreen from '../Screen/listings/MockListingsScreen';
import { commonStyles } from '../Utils/commonStyles';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarLabel: '',
        tabBarStyle: {
          position: 'absolute',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          width: SIZES.width,
          borderRadius: 20,
          backgroundColor: COLORS.darkBlue,
          // borderTopWidth: 1,
          // borderColor: COLORS.darkBlue,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={require('../Assets/home-filled.png')}
                center={false}
                index={1}
                focused={focused} style={{
                  borderTopLeftRadius: 20,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ListingsTab"
        component={MockListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={require('../Assets/review.png')}
                center={true}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={require('../Assets/user-filled.png')}
                center={false}
                focused={focused} style={{
                  borderTopRightRadius: 20,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const BuildTabComponent = ({ image, focused, style, center }) => {
  return (
    <View style={{
      width: SIZES.width / 3, backgroundColor: "#fff", alignItems: "center", height: 63, marginBottom: -20,
      borderTopLeftRadius: center ? 0 : 20, borderTopRightRadius: center ? 0 : 20
    }}>
      <LinearGradient colors={focused ? [COLORS.darkBlue, COLORS.lightBlue] : ["#fff", "#fff"]} style={{
        width: center && focused ? 90 : SIZES.width / 3,
        height: center && focused ? 90 : 63,
        ...commonStyles.centerStyles,
        borderRadius: center ? 100 : 0,
        marginTop: center && focused ? -48 : 0,
        borderLeftWidth: center && focused ? 1 : 0,
        borderColor: COLORS.darkBlue,
        transform: [{ rotate: center && focused ? '90deg' : "0deg" }],
        ...style
      }}>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? "#fff" : COLORS.darkBlue,
            transform: [{ rotate: center && focused ? '270deg' : "0deg" }],
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default BottomTabs;
