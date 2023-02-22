import { View, Text, Image, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import ProfileHeader from './ProfileHeader'
import { commonStyles } from '../../Utils/commonStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../Component/Constant/Color';
import CustomDrawer from '../../Component/CustomDrawer';

export default function ProfileScreen({ navigation }) {
    const [settingsModal, setSettingsModal] = React.useState(false);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <ProfileHeader
                title="My Profile"
                navigation={navigation}
                settingOnPress={() => { setSettingsModal(true) }}
            />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ padding: 20 }}>
                    <View style={{ ...commonStyles.rowStart }}>
                        <Image
                            source={require("../../Assets/user-profile.png")}
                            style={{ width: 94, height: 94, borderRadius: 100 }}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ ...commonStyles.fs17_700 }}>Richard Arnold</Text>
                            <Text style={{ ...commonStyles.fs12_500, color: "#999" }}>Joined April 22, 2022</Text>
                            <View style={{ ...commonStyles.rowStart, marginTop: 4 }}>
                                <FontAwesome5 name='book' color={COLORS.darkBlue} size={17} />
                                <Text style={styles.studentText}>
                                    Student</Text>
                            </View>
                        </View>
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs16_700 }}>About</Text>
                    <Text style={{ ...commonStyles.fs13_400, color: "#000" }}>
                        Hi, I'm Richard Arnold, I'm a person intrested in IT and design, for that I hope to become a UI/UX Designer. Hi, I'm Richard Arnold, I'm a person intrested in IT and design, for that I hope to become a UI/UX Designer.
                    </Text>
                </View>

                <RenderProfileInfo
                    title="Email"
                    info="username@example.com"
                />

                <RenderProfileInfo
                    title="Date Of Birth"
                    info="25-12-1995"
                />

                <RenderProfileInfo
                    title="State"
                    info="Madhya Pradesh"
                />

                <RenderProfileInfo
                    title="Number of previous attempts"
                    info="20"
                />

                <CustomDrawer
                    modalVisible={settingsModal}
                    callback={() => { setSettingsModal(false) }}
                    navigation={navigation}
                />

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    )
}

export const RenderProfileInfo = ({ title, info }) => {
    return (
        <TouchableHighlight style={{ backgroundColor: "#eee", marginVertical: 4 }} underlayColor="#dcdcdc" onPress={() => { }}>
            <View style={{ width: "100%", height: 55, paddingHorizontal: 20, justifyContent: "center" }}>
                <Text style={commonStyles.fs14_600}>{title}: </Text>
                <Text style={commonStyles.fs14_400}>{info}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    userImage: {
        width: 120, height: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.primary,
        marginBottom: 8
    },
    personal: {
        alignItems: 'center',
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        paddingVertical: 20,
        borderRadius: 9
    },
    general: {
        alignItems: 'center',
        elevation: 0,
        shadowColor: "#999",
        backgroundColor: "#fff",
        borderRadius: 9,
        marginTop: 10
    },
    generalBtn: {
        ...commonStyles.rowBetween, width: "100%", paddingVertical: 12,
    },
    generalBtnText: {
        ...commonStyles.fs13_400, marginLeft: 10, marginBottom: 4
    },
    studentText: {
        ...commonStyles.fs13_500, color: "#999", marginLeft: 6
    }
})