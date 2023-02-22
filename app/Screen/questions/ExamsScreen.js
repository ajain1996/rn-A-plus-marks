import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import { commonStyles } from '../../Utils/commonStyles'
import CustomButton from '../../Component/CustomButton'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import Navigation from '../../Service/Navigation'

export default function ExamsScreen({ navigation }) {
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <CustomHeader title="Exam Name" navigation={navigation} />

            <View style={{ padding: 16, height: SIZES.height - 80, justifyContent: "space-between" }}>
                <View>
                    <View style={commonStyles.card}>
                        <Text style={{ ...commonStyles.fs22_700, textAlign: "center" }}>Tier 1</Text>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#f7f8f9"
                            onPress={() => { Navigation.navigate("PreviousYearMockScreen") }}
                        >
                            <Text style={commonStyles.fs15_500}>Previous Years Mocks</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#f7f8f9"
                            onPress={() => { Navigation.navigate("PreviousYearMockScreen") }}
                        >
                            <Text style={commonStyles.fs15_500}>A+ Mocks</Text>
                        </TouchableHighlight>
                    </View>
                    <Text />

                    <View style={commonStyles.card}>
                        <Text style={{ ...commonStyles.fs22_700, textAlign: "center" }}>Tier 2</Text>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#f7f8f9"
                            onPress={() => { Navigation.navigate("PreviousYearMockScreen") }}
                        >
                            <Text style={commonStyles.fs15_500}>Previous Years Mocks</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#f7f8f9"
                            onPress={() => { Navigation.navigate("PreviousYearMockScreen") }}
                        >
                            <Text style={commonStyles.fs15_500}>A+ Mocks</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <CustomButton
                    text="Back"
                    fw="600" fs={16}
                    textColor={COLORS.white}
                    onPress={() => { navigation.goBack() }}
                    buttonStyle={styles.btn}
                    underlayColor="#fff"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%", height: 48, backgroundColor: "#fff", paddingHorizontal: 10,
        ...commonStyles.centerStyles, paddingBottom: 4, elevation: 9, shadowColor: "#999",
        borderRadius: 5, marginTop: 14
    },
    btn: {
        backgroundColor: COLORS.theme,
        width: '100%',
        height: 58,
        borderRadius: 30,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})