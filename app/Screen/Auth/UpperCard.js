import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES } from '../../Component/Constant/Color'
import { FONTS } from '../../Component/Constant/Font'

export default function UpperCard({ image, text }) {
    return (
        <View style={styles.uppercard}>
            <Image
                source={image}
                style={{ width: 180, height: 180, marginTop: -60 }}
            />
            <Text style={styles.upperCardText}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    uppercard: {
        width: SIZES.width,
        height: SIZES.height / 3.8,
        borderBottomLeftRadius: SIZES.height / 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff"
    },
    upperCardText: {
        color: '#000',
        fontFamily: FONTS.Bold,
        fontSize: 22,
        marginTop: -50
    },
})