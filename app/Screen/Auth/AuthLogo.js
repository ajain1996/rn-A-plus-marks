import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { COLORS } from '../../Component/Constant/Color';
import { commonStyles } from '../../Utils/commonStyles';

export default function AuthLogo({ text }) {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ ...commonStyles.rowStart, justifyContent: "center" }}>
                <View style={{ ...commonStyles.rowStart, alignItems: "flex-start", marginRight: 8 }}>
                    <Text style={{ fontSize: 55, color: COLORS.darkBlue }}>A</Text>
                    <Text style={{ fontSize: 26, color: COLORS.darkBlue, marginTop: 6, marginLeft: -12 }}>+</Text>
                </View>
                <Text style={{ fontSize: 32, color: "#000" }}>Marks</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "400", color: "#000", marginTop: -12 }}>{text}</Text>
        </View>
    )
}