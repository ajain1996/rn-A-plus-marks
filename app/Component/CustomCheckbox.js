import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native';
import { COLORS } from './Constant/Color';
import { commonStyles } from '../Utils/commonStyles';

export function CustomCheckTickbox({ callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <Image
                    source={require("../Assets/check-outline.png")}
                    style={{ width: 18, height: 18, tintColor: "#666" }}
                />
            )
        } else {
            return (
                <Image
                    source={require("../Assets/check-filled.png")}
                    style={{ width: 18, height: 18, tintColor: "#666" }}
                />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

export function CustomCheckTickbox2({ callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <Image
                    source={require("../Assets/check-outline.png")}
                    style={{ width: 18, height: 18, tintColor: "#666" }}
                />
            )
        } else {
            return (
                <Image
                    source={require("../Assets/check-filled.png")}
                    style={{ width: 20, height: 20, tintColor: COLORS.theme, borderRadius: 5 }}
                />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

export function CustomCheckbox({ title, callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <View style={[commonStyles.rowStart, { marginVertical: 8 }]}>
                    <Image
                        source={require("../Assets/check-outline.png")}
                        style={{ width: 18, height: 18, tintColor: "#666" }}
                    />
                    <Text style={{ ...commonStyles.fs14_500, color: COLORS.darkBlue, marginLeft: 8 }}>
                        {title}
                    </Text>
                </View>
            )
        } else {
            return (
                <View style={[commonStyles.rowStart, { marginVertical: 8 }]}>
                    <Image
                        source={require("../Assets/check-filled.png")}
                        style={{ width: 18, height: 18, tintColor: "#666" }}
                    />
                    <Text style={{ ...commonStyles.fs14_500, color: COLORS.darkBlue, marginLeft: 8 }}>
                        {title}
                    </Text>
                </View>
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    checkBox: {
        width: 24, height: 24,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    checkBox2: {
        width: 20, height: 20,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    isCheckedStyle: {
        width: 14, height: 14,
        backgroundColor: COLORS.pink,
        borderRadius: 100,
    }
})