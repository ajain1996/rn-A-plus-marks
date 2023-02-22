import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../Utils/commonStyles';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from './Constant/Color';

export default function CustomHeader({ title, navigation }) {
    return (
        <LinearGradient colors={[COLORS.darkBlue, COLORS.darkBlue, COLORS.darkBlue]} style={{
            borderBottomLeftRadius: 16, borderBottomRightRadius: 16
        }}>
            <View style={styles.container}>
                {navigation
                    ? <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="transparent">
                        <Ionicons name="chevron-back" size={30} color="#fff" />
                    </TouchableHighlight>
                    : <></>}
                <Text style={{ ...commonStyles.fs16_700, color: "#fff" }}>{title}</Text>

                <View style={{ width: 40 }} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        ...commonStyles.rowBetween,
        padding: 14,
        backgroundColor: COLORS.darkBlue,
        elevation: 9,
        shadowColor: "#999",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    }
})
