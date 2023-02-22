import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../../Utils/commonStyles';
import { COLORS, SIZES } from '../../Component/Constant/Color';
import CustomButton from '../../Component/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../Component/CustomHeader';

export default function MockTestDetailScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title="Mock Test detail" navigation={navigation} />
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ padding: 14 }}>
                    <Image
                        source={require("../../Assets/i2.png")}
                        style={{ width: "100%", height: 200, borderRadius: 10 }}
                    />

                    <View style={{ marginTop: -62, padding: 11 }}>
                        <View style={commonStyles.card}>
                            <Text style={{ ...commonStyles.fs14_600, lineHeight: 18 }}>
                                DSA-Python a specialized program in DAS with python
                            </Text>
                            <View style={{ height: 8 }} />
                            <Text style={{ ...commonStyles.fs11_400, lineHeight: 14 }}>
                                It involves linked-list, Stacks, Queus, Arrays, Soritings, Google distance metrics, etc.
                            </Text>
                            <Text />

                            <RenderInfo
                                icon={require("../../Assets/medal.png")}
                                text="Certified Labs"
                            />

                            <RenderInfo
                                icon={require("../../Assets/check.png")}
                                text="Free home sample pickup"
                            />

                            <RenderInfo
                                icon={require("../../Assets/report.png")}
                                text="E - Reports in 3 day"
                            />

                            <View style={{ ...commonStyles.rowStart, marginTop: 6, marginBottom: 12 }}>
                                <Text style={{ ...commonStyles.fs18_600, color: COLORS.darkBlue }}>
                                    15.99
                                </Text>
                                <View style={{ width: 10 }} />

                                <Text style={{ ...commonStyles.fs12_600, color: COLORS.green }}>
                                    +15% Health Cashback
                                </Text>
                            </View>

                            <View style={commonStyles.rowBetween}>
                                <TouchableHighlight
                                    style={{
                                        ...commonStyles.btnOutline,
                                        width: SIZES.width / 2.7,
                                        borderRadius: 8,
                                    }}
                                    underlayColor="#fff"
                                >
                                    <Text style={{ ...commonStyles.fs12_500 }}>Add to Card</Text>
                                </TouchableHighlight>
                                <CustomButton
                                    text="Book Now"
                                    fw="600" fs={12}
                                    textColor={COLORS.white}
                                    onPress={() => { navigation.navigate("BuyNowScreen") }}
                                    buttonStyle={{ ...commonStyles.btn, width: SIZES.width / 2.7, borderRadius: 8 }}
                                    underlayColor="#fff"
                                />
                            </View>
                        </View>
                    </View>

                    <LinearGradient colors={[COLORS.darkBlue, COLORS.darkBlue, COLORS.lightBlue]}
                        style={{ width: "100%", padding: 20, ...commonStyles.rowBetween, borderRadius: 9 }}
                    >
                        <View style={{ width: "60%" }}>
                            <Text style={{ ...commonStyles.fs15_500, color: "#fff" }}>
                                Need help with booking your test?
                            </Text>
                            <View style={{ height: 4 }} />
                            <Text style={{ ...commonStyles.fs11_400, color: "#fff" }}>
                                Our experts are here to help you
                            </Text>
                        </View>
                        <View style={{ width: "35%" }}>
                            <TouchableHighlight
                                style={{
                                    ...commonStyles.btnOutline,
                                    width: SIZES.width / 3.6, height: 45,
                                    borderRadius: 100, borderWidth: 0
                                }}
                                underlayColor="#fff"
                            >
                                <Text style={{ ...commonStyles.fs13_500 }}>Call Now</Text>
                            </TouchableHighlight>
                        </View>
                    </LinearGradient>
                    <Text />

                    <View style={commonStyles.card}>
                        <Text style={{ ...commonStyles.fs15_500, marginBottom: 18 }}>
                            This Test Series Includes
                        </Text>
                        <RenderInfo
                            icon={require("../../Assets/medal.png")}
                            text="Data Structures"
                        />
                        <RenderInfo
                            icon={require("../../Assets/medal.png")}
                            text="Python"
                        />
                        <RenderInfo
                            icon={require("../../Assets/medal.png")}
                            text="Javascript"
                        />
                        <RenderInfo
                            icon={require("../../Assets/medal.png")}
                            text="React"
                        />
                        <RenderInfo
                            icon={require("../../Assets/medal.png")}
                            text="Angular"
                        />
                    </View>
                </View>
                <Text /><Text /><Text />
            </ScrollView>
        </View>
    )
}

const RenderInfo = ({ text, icon }) => {
    return (
        <View style={{ ...commonStyles.rowStart, marginBottom: 10 }}>
            <Image
                source={icon}
                style={{ width: 25, height: 25, borderRadius: 10, marginRight: 12 }}
            />
            <Text style={{ ...commonStyles.fs13_600, lineHeight: 18 }}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({});