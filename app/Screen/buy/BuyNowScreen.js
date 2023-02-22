import { View, Text, Image, StyleSheet, ImageBackground, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../Component/CustomButton'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import CustomHeader from '../../Component/CustomHeader'
import { commonStyles } from '../../Utils/commonStyles'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import LinearGradient from 'react-native-linear-gradient'

export default function BuyNowScreen({ navigation }) {
    return (
        <>
            <CustomHeader navigation={navigation} title="Premium" />
            <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
                keyboardShouldPersistTaps={'always'}
            >
                <View style={{ marginTop: 22, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 24, color: "#1572B9", fontWeight: "900" }}>Get Now</Text>

                    <Text style={{ ...commonStyles.fs14_400, marginTop: 8 }}>
                        You must need to purchase to continue this test.
                    </Text>

                    <View style={[styles.premiumContentWrapper]}>
                        <RenderPremiumContent
                            title="Premium Content"
                            subText="New user need to get membership to continue to use ShopAd."
                        />
                        <RenderPremiumContent
                            title="Premium Content"
                            subText="New user need to get membership to continue to use ShopAd."
                        />
                        <RenderPremiumContent
                            title="Premium Content"
                            subText="New user need to get membership to continue to use ShopAd."
                        />
                    </View>

                    <LinearGradient colors={[COLORS.darkBlue, COLORS.darkBlue, COLORS.lightBlue]}
                        style={{
                            width: "100%", height: 200, marginTop: 18, borderRadius: 4, marginBottom: 20,
                            backgroundColor: COLORS.darkBlue, alignItems: "center", justifyContent: "center"
                        }}
                    >
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ ...commonStyles.rowStart, alignItems: 'flex-end', marginBottom: 12 }}>
                                <Text style={{ fontSize: 22, color: "#fff", fontWeight: "900" }}>
                                    Rs 200/
                                </Text>
                                <Text style={{ fontSize: 14, color: "#fff", fontWeight: "400" }}>
                                    Month
                                </Text>
                            </View>
                            <View style={{ width: SIZES.width - 100, height: 1, backgroundColor: "#fff" }} />
                            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "400", marginTop: 12 }}>
                                Rs 6000 billed annually
                            </Text>
                            <TouchableHighlight style={[styles.bestValueBtn]}>
                                <Text style={{ fontSize: 14, color: "#000", fontWeight: "500" }}>
                                    Best Value
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </LinearGradient>

                </View>
            </ScrollView>
            <CustomButton
                text="Get Now"
                fw="600" fs={16}
                textColor={COLORS.white}
                onPress={() => { navigation.navigate("MockTestPageScreen") }}
                buttonStyle={styles.button}
                underlayColor="#fff"
            />
            <View style={{ height: 16 }} />
        </>
    )
}

const RenderPremiumContent = ({ title, subText }) => {
    return (
        <View style={{ ...commonStyles.rowStart, alignItems: 'flex-start', marginVertical: 6 }}>
            <SimpleLineIcons name='badge' size={30} color="#000" style={{ marginTop: 4 }} />
            <View style={{ width: SIZES.width - 100, marginLeft: 16 }}>
                <Text style={{ ...commonStyles.fs14_500 }}>{title}</Text>
                <Text style={{ ...commonStyles.fs12_400, marginTop: 2 }}>
                    {subText}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    premiumContentWrapper: {
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "#000",
        marginTop: 24
    },
    bestValueBtn: {
        width: 114, height: 32,
        backgroundColor: "#fff",
        borderRadius: 30,
        ...commonStyles.centerStyles,
        marginTop: 17
    },
    button: {
        height: 64,
        width: SIZES.width / 1.1,
        backgroundColor: '#eee',
        marginTop: 10,
        borderRadius: 6
    },
})