import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

export function RenderHexagonData({ data }) {
    return (
        <View style={{ marginVertical: 10, marginHorizontal: 6 }}>
            <RenderHexagon />
            <View style={{ position: "absolute", top: 9, left: 20 }}>
                <Text style={styles.questionsText}>{data.question}</Text>
            </View>
        </View>
    );
}

export default function RenderHexagon() {
    return (
        <View style={styles.hexagon}>
            {/* <View style={{ width: 60, height: 10, backgroundColor: "#fff", marginTop: -4 }} /> */}
            <View style={styles.hexagonAfter} />
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonInner} />
        </View>
    );
}

const styles = StyleSheet.create({
    hexagon: {
        width: 45,
        height: 32,
    },
    hexagonInner: {
        width: 50,
        height: 25,
        backgroundColor: '#B92E06'
    },
    hexagonAfter: {
        position: 'absolute',
        bottom: -16,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderLeftColor: 'transparent',
        borderRightWidth: 25,
        borderRightColor: 'transparent',
        borderTopWidth: 25,
        borderTopColor: '#B92E06'
    },
    hexagonBefore: {
        position: 'absolute',
        top: 41,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderLeftColor: '#fff',
        borderRightWidth: 50,
        borderRightColor: '#fff',
        borderBottomWidth: 25,
        borderBottomColor: '#fff'
    },
    questionsText: {
        fontStyle: 'normal',
        fontWeight: '400',
        alignSelf: 'center',
        fontSize: 14,
        color: '#fff',
    },
});