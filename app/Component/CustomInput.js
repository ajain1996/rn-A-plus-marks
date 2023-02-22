import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants/theme';
import MText from './MText'

function returnIcon(type, icon, iconColor, iconSize) {
    if (type === "feather") {
        return <Feather name={icon} color={iconColor} size={iconSize} />
    } else if (type === "antdesign") {
        return <AntDesign name={icon} color={iconColor} size={iconSize} />
    } else if (type === "entypo") {
        return <Entypo name={icon} color={iconColor} size={iconSize} />
    }
}

export default function CustomButton({
    text, bgColor, textColor,
    fs, fw, width, height,
    icon, onPress, iconColor,
    borderWidth, buttonStyle,
    right, iconBg, iconSize,
    iconType, underlayColor,
    borderRadius
}) {
    if (!borderWidth) {
        return (
            <TouchableHighlight style={{ alignItems: 'center', borderRadius: borderRadius }}
                onPress={onPress} underlayColor={underlayColor}
            >
                <View
                    style={[styles.submit_btn, {
                        backgroundColor: bgColor,
                        width: width, height: height,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: borderRadius,
                        ...buttonStyle
                    }]}
                    activeOpacity={0.7}
                >
                    {icon
                        ? <View style={[styles.iconBg, { backgroundColor: iconBg }]}>
                            {returnIcon(iconType, icon, iconColor, iconSize)}
                        </View>
                        : <></>}
                    {icon ? <View style={{ width: 8 }} /> : <></>}
                    <MText
                        fs={fs} text={text}
                        textColor={textColor}
                        fw={fw} textAlign="center"
                    />
                    {right ? <View style={{ width: 45, height: 20 }} /> : <></>}
                </View>
            </TouchableHighlight>
        )
    } else {
        return (
            <TouchableHighlight style={{ alignItems: 'center', borderRadius: borderRadius }}
                onPress={onPress} underlayColor={underlayColor}
            >
                <View
                    style={[styles.submit_btn, {
                        backgroundColor: COLORS.transparent,
                        width: width, height: height,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1, borderColor: bgColor,
                    }]}
                >
                    {icon ? <Entypo name={icon} color={iconColor} size={18} /> : <></>}
                    {icon ? <View style={{ width: 8 }} /> : <></>}
                    <MText
                        fs={fs} text={text}
                        textColor={textColor}
                        fw={fw}
                    />
                </View>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    submit_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    iconBg: {
        width: 45, height: 45, backgroundColor: "#E0EDF4", borderRadius: 100,
        justifyContent: "center", alignItems: "center",
    }
});

