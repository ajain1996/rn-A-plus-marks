import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../Component/Constant/Color'

export default function NewUser({ text1, text2, onPress }) {
    return (
        <View style={styles.contactView}>
            <Text style={styles.smallTxt}>{text1}</Text>
            <TouchableOpacity style={{ marginLeft: 4 }}
                onPress={onPress}>
                <Text style={styles.register}>{text2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contactView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    register: {
        fontSize: 13,
        marginTop: 12,
        textAlign: 'center',
        color: COLORS.darkBlue,
        textDecorationLine: 'underline'
    },
    smallTxt: {
        fontSize: 13,
        color: COLORS.black,
        marginTop: 10,
        textAlign: 'center',
    },
})