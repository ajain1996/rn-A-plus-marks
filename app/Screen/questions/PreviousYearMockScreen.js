import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import { commonStyles } from '../../Utils/commonStyles'
import CustomButton from '../../Component/CustomButton'
import { COLORS, SIZES } from '../../Component/Constant/Color'

export default function PreviousYearMockScreen({ navigation }) {
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <CustomHeader title="Previous Years mocks" navigation={navigation} />

            <ScrollView>
                <View style={{ padding: 16, height: "100%", justifyContent: "space-between" }}>
                    <View>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((data, index) => {
                                return (
                                    <View style={[commonStyles.card, { marginBottom: 12 }]} key={index}>
                                        <View style={commonStyles.rowBetween}>
                                            <View style={{ width: "36%" }}>
                                                <Text style={commonStyles.fs20_600}>
                                                    {"Mock Test "}{data}
                                                </Text>
                                            </View>
                                            <View style={{ width: "34%" }}>
                                                <Text style={{ ...commonStyles.fs11_400, textAlign: "center", lineHeight: 15 }}>
                                                    {"Time /\n No of question /\n Max. Marks"}
                                                </Text>
                                            </View>
                                            <View style={{ width: "28%" }}>
                                                <CustomButton
                                                    text={"Attempt\nNow"}
                                                    fw="600" fs={14}
                                                    textColor={COLORS.white}
                                                    onPress={() => { navigation.navigate("BuyNowScreen") }}
                                                    buttonStyle={styles.btn}
                                                    underlayColor="#fff"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <CustomButton
                text="Back"
                fw="600" fs={16}
                textColor={COLORS.white}
                onPress={() => { navigation.goBack() }}
                buttonStyle={styles.back}
                underlayColor="#fff"
            />
            <View style={{ height: 10 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.theme,
        width: '100%',
        height: 58,
        borderRadius: 8,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        backgroundColor: COLORS.theme,
        width: SIZES.width / 1.08,
        height: 58,
        borderRadius: 8,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
