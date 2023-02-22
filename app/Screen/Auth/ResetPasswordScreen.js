import React, { useEffect, useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { COLORS } from '../../Component/Constant/Color';
import { commonStyles } from '../../Utils/commonStyles';
import LoginTextInput from './LoginTextInput';
import CustomButton from '../../Component/CustomButton';

export default function ResetPasswordScreen() {

    const [email, setEmail] = useState('');

    useEffect(() => { }, []);

    const handleSubmit = async () => { }

    return (
        <>
            <StatusBar
                backgroundColor={COLORS.darkBlue}
                barStyle="light-content"
                hidden={false}
            />
            <View style={{ justifyContent: "space-between", height: "95%" }}>
                <View style={styles.inputWrapper}>
                    <View style={styles.cardView}>
                        <View style={commonStyles.card}>
                            <Text style={styles.Login}>Reset Password</Text>
                            <Text />
                            <LoginTextInput
                                placeholder="Enter New Password"
                                secureTextEntry={true}
                                onChange={value => {
                                    setEmail(value);
                                }}
                                value={email}
                            />
                            <View style={{ height: 2 }} />

                            <LoginTextInput
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                onChange={value => {
                                    setEmail(value);
                                }}
                                value={email}
                            />
                            <Text />

                            <CustomButton
                                text="Reset Password"
                                fw="600" fs={16}
                                textColor={COLORS.white}
                                onPress={handleSubmit}
                                buttonStyle={styles.btn}
                                underlayColor="#fff"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.theme,
        width: '100%',
        height: 50,
        borderRadius: 30,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        backgroundColor: '#fff',
        width: '92%',
        borderRadius: 15,
        marginHorizontal: 18
    },
    cardView: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingBottom: 20,
        paddingTop: 20,
    },
    Login: {
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: "500",
        color: "#000",
        marginTop: 10,
    },
});