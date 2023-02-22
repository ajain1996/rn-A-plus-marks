import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import { commonStyles } from '../../Utils/commonStyles'

export default function AboutUsScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader
                title="About Us"
                navigation={navigation}
            />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 12 }}>

                    <Image
                        source={require("../../Assets/about.jpeg")}
                        resizeMode="contain"
                        style={{ width: "90%", height: SIZES.width / 1.8, marginBottom: 20, alignSelf: "center" }}
                    />

                    <View style={{ elevation: 9, shadowColor: "#999", borderRadius: 20, backgroundColor: COLORS.white }}>
                        <Text style={{ ...commonStyles.fs12_400, lineHeight: 24, color: "#202020", margin: 16 }}>
                            Please read this Privacy Policy carefully before using the "Website" and mobile applications ("App"). This Website and App are owned, registered and operated by “Platform Owner” ("we", "us" "our"). This Platform is a medium through which Services of Platform Owner shall be streamed directly to its Platform Users via App or Website. This App and the Website shall be together referred to as the “Platform”. By using this Platform, the Platform Users of the Website or App, hereinafter referred to as "User" or "you" or "your" or "yourself" “registered user” or “guest user” signify in your agreement to be bound by these Terms & Conditions("Agreement"). The information if any collected through this Platform will be secured, safeguarded and shall be utilised for providing better and appropriate services to you and for lawful usage and purpose.We process information relating to an identified or identifiable natural person in accordance with this Privacy Policy and in compliance with the relevant data protection regulation and laws. This Policy provides the necessary information regarding right and obligations for concerned parties, and explains how, why and when we process such information.
                        </Text>
                    </View>
                </View>

                <View style={{ height: 60 }} />
            </ScrollView>
        </View>
    )
}