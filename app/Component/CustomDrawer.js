import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { commonStyles } from '../Utils/commonStyles';
import { COLORS, SIZES } from './Constant/Color';
import CustomButton from './CustomButton';
import MText from './MText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = ({ modalVisible, callback, navigation }) => {
    const { userData } = useSelector(state => state.User);
    //   console.log('this is user type \n\n\n\n', userType, '<<<< this is user type');

    var username = '';
    if (userData !== null && userData !== undefined) {
        username = userData[0]?.email?.split('@')[0];
    }

    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={callback}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => {
                        callback();
                    }}
                    underlayColor="transparent">
                    <View style={styles.modalView}>
                        <View style={{ height: "90%", justifyContent: "space-between" }}>
                            <View style={{ alignItems: "flex-start", paddingHorizontal: 20 }}>
                                <Image
                                    source={require("../Assets/user-profile.png")}
                                    style={{ width: 94, height: 94, borderRadius: 100 }}
                                />
                                <View style={{ marginTop: 16 }}>
                                    <Text style={{ ...commonStyles.fs17_700 }}>Richard Arnold</Text>
                                    <Text style={{ ...commonStyles.fs12_500, color: "#999", marginVertical: 3 }}>
                                        Joined April 22, 2022
                                    </Text>
                                    <View style={{ ...commonStyles.rowStart, marginTop: 3 }}>
                                        <FontAwesome5 name='book' color={COLORS.darkBlue} size={17} />
                                        <Text style={styles.studentText}>
                                            Student</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 0 }} />

                            <View style={{ width: SIZES.width / 1.2, height: 1, backgroundColor: "#ddd", alignSelf: "center" }} />
                            {/* <View>
                                        {userData?.userProfile !== undefined ? (
                                            <Image
                                                source={{ uri: userData?.userProfile }}
                                                resizeMode="contain"
                                                style={{
                                                    width: 120,
                                                    height: 120,
                                                    borderRadius: 100,
                                                    marginTop: 6,
                                                    borderWidth: 2,
                                                    borderColor: '#E27127',
                                                }}
                                            />
                                        ) : (
                                            <View
                                                style={{
                                                    width: 120,
                                                    height: 120,
                                                    backgroundColor: '#f7f8f9',
                                                    borderRadius: 100,
                                                    ...commonStyles.centerStyles,
                                                }}>
                                                <Image
                                                    source={require('../Assets/user.png')}
                                                    resizeMode="contain"
                                                    style={{ width: 45, height: 45 }}
                                                />
                                            </View>
                                        )}
                                    </View> */}

                            {/* <Text /> */}

                            <RenderDrawerBtn
                                title="Home"
                                icon="home"
                                onPress={() => {
                                    callback();
                                    navigation.navigate("Root")
                                }}
                            />

                            <RenderDrawerBtn
                                title="My Reports"
                                icon="file-invoice"
                                onPress={() => {
                                    callback();
                                    navigation.navigate("ReportsScreen")
                                }}
                            />

                            <RenderDrawerBtn
                                title="My Orders"
                                icon="cubes"
                                onPress={() => {
                                    callback();
                                    navigation.navigate("OrdersScreen")
                                }}
                            />

                            <RenderDrawerBtn
                                title="About US"
                                icon="user-tie"
                                onPress={() => {
                                    callback();
                                    navigation.navigate("AboutUsScreen")
                                }}
                            />

                            <RenderDrawerBtn
                                title="Privacy Policy"
                                icon="file-alt"
                                onPress={() => {
                                    callback();
                                    navigation.navigate("PrivacyPolicyScreen")
                                }}
                            />

                            <RenderDrawerBtn
                                title="Terms & Conditions"
                                icon="file-contract"
                                onPress={() => {
                                    callback();
                                    navigation.navigate("TermsAndConditionsScreen")
                                }}
                            />

                            {/* <CustomButton
                                    text="Terms & Conditions"
                                    fw="600" fs={14}
                                    textColor={COLORS.darkBlue}
                                    colors={["#fff", "#fff"]}
                                    onPress={() => {
                                        callback();
                                        navigation.navigate("TermsAndConditionsScreen")
                                    }}
                                    buttonStyle={styles.button}
                                    underlayColor="#fff"
                                /> */}

                            <View style={{ borderTopWidth: 1, borderColor: "#ddd", paddingTop: 20 }}>
                                <CustomButton
                                    text="Logout"
                                    fw="600" fs={14}
                                    textColor={COLORS.white}
                                    onPress={() => {
                                        callback();
                                        navigation.navigate("LoginScreen")
                                    }}
                                    buttonStyle={styles.button}
                                    underlayColor="#fff"
                                />

                                <View style={{ height: 12 }} />

                                <MText
                                    text="V2.1.0"
                                    textColor="#000"
                                    fs={12}
                                    textAlign="center"
                                />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

const RenderDrawerBtn = ({ title, icon, onPress }) => {
    return (
        <TouchableHighlight style={{ paddingVertical: 16, width: SIZES.width / 1.2, paddingHorizontal: 20 }}
            onPress={onPress}
            underlayColor="#eee"
        >
            <View style={commonStyles.rowStart}>
                <View style={{ width: 30, ...commonStyles.centerStyles }}>
                    <FontAwesome5 name={icon} size={22} color={COLORS.darkBlue} />
                </View>
                <View style={{ width: 8 }} />
                <Text style={{ ...commonStyles.fs14_500, color: COLORS.darkBlue }}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: SIZES.width,
        height: SIZES.height,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: SIZES.width / 1.2,
        height: SIZES.height + 80,
        marginTop: 80,
    },
    button: {
        height: 48,
        width: SIZES.width / 1.4,
        backgroundColor: '#eee',
        marginTop: 10,
        borderRadius: 6,
        borderWidth: 1.2,
        borderColor: COLORS.darkBlue
    },
    logout: {
        height: 50,
        width: SIZES.width / 1.4,
        backgroundColor: '#eee',
        marginTop: 10,
        borderRadius: 6
    },
    studentText: {
        ...commonStyles.fs13_500, color: "#999", marginLeft: 6
    }
});

export default CustomDrawer;