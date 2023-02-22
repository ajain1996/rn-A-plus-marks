import { View, Image } from 'react-native'
import React from 'react'

export function LoginBgTop() {
    return (
        <View style={{ width: "100%", transform: [{ rotate: '180deg' }], position: "absolute", top: 0 }}>
            <Image
                source={require("../../Assets/auth-bg.png")}
                resizeMode="stretch"
                style={{ width: "100%", height: 150 }}
            />
        </View>
    )
}

export function RegisterBgTop() {
    return (
        <View style={{ width: "100%", zIndex: -1, position: "absolute", bottom: 0 }}>
            <Image
                source={require("../../Assets/auth-bg.png")}
                resizeMode="stretch"
                style={{ width: "100%", height: 150 }}
            />
        </View>
    )
}
