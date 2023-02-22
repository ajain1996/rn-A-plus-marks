import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../Component/Constant/Color';
import { FONTS } from '../../Component/Constant/Font';

export default function LoginTextInput({ value, onChange, placeholder, keyboardType, inputStyle, secureTextEntry }) {
    return (
        <View style={{ paddingTop: 12 }}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.inputs, inputStyle]}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry}
                    underlineColorAndroid="transparent"
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor="#999"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 0,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#999",
    },
    inputs: {
        borderBottomColor: COLORS.white,
        flex: 1,
        color: COLORS.liteBlack,
        paddingLeft: 10,
        fontFamily: FONTS.Regular,
        paddingLeft: 6,
        color: "#000"
    },
})