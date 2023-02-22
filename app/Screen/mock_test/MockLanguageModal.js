import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../../Component/Constant/Color';
import CustomButton from '../../Component/CustomButton';
import { CustomCheckTickbox } from '../../Component/CustomCheckbox';
import CustomDropdownComponent from '../../Component/CustomDropdownComponent';
import Navigation from '../../Service/Navigation';
import { commonStyles } from '../../Utils/commonStyles';

export const data = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
];

const MockLanguageModal = ({ modalVisible, callback }) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={callback}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={callback}
                    underlayColor="transparent">
                    <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                        <Text style={{ ...commonStyles.fs14_500, alignSelf: "flex-start", marginBottom: -10, marginLeft: -6 }}>
                            Choose your default language
                        </Text>
                        <CustomDropdownComponent
                            placeholder="Select language"
                            data={data}
                        />

                        <View style={{ ...commonStyles.rowStart, alignItems: "flex-start" }}>
                            <View style={{ marginTop: 3 }}>
                                <CustomCheckTickbox callback={() => { }} />
                            </View>
                            <Text style={{ ...commonStyles.fs11_400, color: "red", marginLeft: 8, width: "92%" }}>
                                Please note all questions will appear in your default language. This language can be changed for a particular question later on.
                            </Text>
                        </View>
                        <Text />

                        <CustomButton
                            text="Next"
                            fw="600" fs={16}
                            textColor={COLORS.white}
                            onPress={() => {
                                callback()
                                Navigation.navigate("QuestionScreen")
                            }}
                            buttonStyle={styles.saveBtn}
                            underlayColor="#fff"
                        />
                    </TouchableOpacity>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: SIZES.width,
        height: SIZES.height,
    },
    modalView: {
        backgroundColor: "#fff",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: SIZES.width / 1.1,
        borderRadius: 8,
        padding: 30
    },
    text1: {
        ...commonStyles.fs15_400, textAlign: "center", lineHeight: 22
    },
    textId: {
        ...commonStyles.fs14_500,
        textAlign: "center",
        lineHeight: 22,
        color: COLORS.theme,
        marginVertical: 8,
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    reportInput: {
        width: SIZES.width / 1.8,
        height: 48,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        marginBottom: 6,
        color: '#000',
        paddingHorizontal: 12,
    },
    btnWrapper: {
        width: '100%',
        height: 48,
        ...commonStyles.centerStyles,
    },
    saveBtn: {
        width: SIZES.width / 3,
        height: 45,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa"
    },
    cancelBtn: {
        width: SIZES.width / 3,
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#999",
        borderWidth: 1, borderColor: "#eee"
    }
});

export default MockLanguageModal;
