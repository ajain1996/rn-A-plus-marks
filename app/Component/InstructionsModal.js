import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../Component/Constant/Color';
import CustomButton from '../Component/CustomButton';
import { CustomCheckTickbox } from '../Component/CustomCheckbox';
import CustomDropdownComponent from '../Component/CustomDropdownComponent';
import Navigation from '../Service/Navigation';
import { commonStyles } from '../Utils/commonStyles';
import Orientation from 'react-native-orientation-locker';

export const data = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
];

export default function InstructionsModal({ modalVisible, callback }) {
    React.useEffect(() => {
        Orientation.lockToLandscape();

        return () => {
            Orientation.removeOrientationListener(() => {
                Orientation.lockToPortrait();
            });
        }
    }, [])

    return (
        <View style={styles.modalView}>
            {/* <View style={{ width: SIZES.width / 2 }}>
                <Text style={commonStyles.fs11_400}>Marks for correct answer: 1</Text>
            </View>

            <View style={{ ...commonStyles.rowStart, width: SIZES.width / 2 }}>
                <Text style={commonStyles.fs11_400}>Negative Marks: </Text>
                <Text style={[commonStyles.fs11_400, { color: "red" }]}>0.25</Text>
            </View> */}

            {/* <View style={{ ...commonStyles.rowStart, width: SIZES.width, marginTop: -8 }}>
                <Text style={commonStyles.fs11_400}>View in: </Text>
                <CustomDropdownComponent
                    placeholder="English"
                    data={data}
                    style={{
                        width: "58%", borderRadius: 0, elevation: 0, borderWidth: 1, height: 30,
                        paddingLeft: 12, backgroundColor: "#eee", borderColor: "#4E85C5",
                    }}
                    containerStyle={{ width: "52%" }}
                />
            </View> */}

            <View style={commonStyles.rowBetween}>
                <View style={{ ...commonStyles.rowStart, alignItems: "center", marginTop: -2 }}>
                    <View style={styles.correct}>
                        <Text style={{ fontSize: 10, color: "#fff" }}>1</Text>
                    </View>
                    <Text style={{ ...commonStyles.fs11_400, marginLeft: 8, width: "90%" }}>
                        Answers
                    </Text>
                </View>
                <View style={{ ...commonStyles.rowStart, alignItems: "center", marginTop: -2 }}>
                    <View style={[styles.correct, { backgroundColor: "red" }]}>
                        <Text style={{ fontSize: 10, color: "#fff" }}>2</Text>
                    </View>
                    <Text style={{ ...commonStyles.fs11_400, marginLeft: 8, width: "90%" }}>
                        Not Answered
                    </Text>
                </View>
            </View>

            <View style={{ height: 8 }} />

            <View style={commonStyles.rowBetween}>
                <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                    <View style={styles.notVisited}>
                        <Text style={{ fontSize: 12, color: "#999" }}>3</Text>
                    </View>
                    <Text style={{ ...commonStyles.fs11_400, marginLeft: 8, width: "90%" }}>
                        {"Not\nAnswered"}
                    </Text>
                </View>
                <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                    <View style={[styles.notVisited, { backgroundColor: "#78559B" }]}>
                        <Text style={{ fontSize: 10, color: "#fff" }}>4</Text>
                    </View>
                    <Text style={{ ...commonStyles.fs11_400, marginLeft: 8, width: "90%" }}>
                        Marked for Review
                    </Text>
                </View>
            </View>

            <View style={{ height: 8 }} />
            <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                <View style={[styles.notVisited, { backgroundColor: "#78559B" }]}>
                    <Text style={{ fontSize: 10, color: "#fff" }}>5</Text>
                </View>
                <Text style={{ ...commonStyles.fs11_400, marginLeft: 8, width: SIZES.width / 2 }}>
                    The questions(s) "Answers and Marked for review" will be considered for evaluation
                </Text>
            </View>
        </View>
    )

    // return (
    //     <View style={{ alignItems: 'flex-start' }}>
    //         <Modal
    //             animationType="fade"
    //             transparent={true}
    //             visible={modalVisible}
    //             onRequestClose={callback}>
    //             <TouchableHighlight
    //                 style={styles.centeredView}
    //                 onPress={callback}
    //                 underlayColor="transparent">
    //                 <TouchableOpacity style={styles.modalView} activeOpacity={1}>
    //                     <Text style={commonStyles.fs12_400}>Marks for correct answer: 1</Text>

    //                     <View style={commonStyles.rowStart}>
    //                         <Text style={commonStyles.fs12_400}>Negative Marks: </Text>
    //                         <Text style={[commonStyles.fs12_400, { color: "red" }]}>0.25</Text>
    //                     </View>

    //                     <View style={{ ...commonStyles.rowStart, width: "100%" }}>
    //                         <Text style={commonStyles.fs12_400}>View in: </Text>
    //                         <CustomDropdownComponent
    //                             placeholder="English"
    //                             data={data}
    //                             style={{
    //                                 width: "100%", borderRadius: 0, elevation: 0, borderWidth: 1, height: 36,
    //                                 paddingLeft: 14, backgroundColor: "#eee", borderColor: "#4E85C5",
    //                             }}
    //                             containerStyle={{ width: "48%" }}
    //                         />
    //                     </View>

    //                     <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
    //                         <View style={styles.correct}>
    //                             <Text style={{ fontSize: 14, color: "#fff" }}>1</Text>
    //                         </View>
    //                         <Text style={{ ...commonStyles.fs12_400, marginLeft: 8, width: "90%" }}>
    //                             Answers
    //                         </Text>
    //                     </View>

    //                     <View style={{ height: 8 }} />
    //                     <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
    //                         <View style={[styles.correct, { backgroundColor: "red" }]}>
    //                             <Text style={{ fontSize: 14, color: "#fff" }}>2</Text>
    //                         </View>
    //                         <Text style={{ ...commonStyles.fs12_400, marginLeft: 8, width: "90%" }}>
    //                             Not Answered
    //                         </Text>
    //                     </View>

    //                     <View style={{ height: 8 }} />
    //                     <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
    //                         <View style={styles.notVisited}>
    //                             <Text style={{ fontSize: 14, color: "#999" }}>3</Text>
    //                         </View>
    //                         <Text style={{ ...commonStyles.fs12_400, marginLeft: 8, width: "90%" }}>
    //                             Not Answered
    //                         </Text>
    //                     </View>

    //                     <View style={{ height: 8 }} />
    //                     <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
    //                         <View style={[styles.notVisited, { backgroundColor: "#78559B" }]}>
    //                             <Text style={{ fontSize: 14, color: "#fff" }}>4</Text>
    //                         </View>
    //                         <Text style={{ ...commonStyles.fs12_400, marginLeft: 8, width: "90%" }}>
    //                             Marked for Review
    //                         </Text>
    //                     </View>

    //                     <View style={{ height: 8 }} />
    //                     <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
    //                         <View style={[styles.notVisited, { backgroundColor: "#78559B" }]}>
    //                             <Text style={{ fontSize: 14, color: "#fff" }}>5</Text>
    //                         </View>
    //                         <Text style={{ ...commonStyles.fs12_400, marginLeft: 8, width: "90%" }}>
    //                             The questions(s) "Answers and Marked for review" will be considered for evaluation
    //                         </Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             </TouchableHighlight>
    //         </Modal>
    //     </View>
    // );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: SIZES.height,
        height: SIZES.width,
    },
    modalView: {
        width: SIZES.width / 5.5,
        // borderRadius: 8,
        paddingVertical: 8,
        // backgroundColor: "#fff",
        // alignItems: 'flex-start',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        // width: SIZES.width,
        // borderRadius: 8,
        // padding: 30,
        marginTop: -20
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
    },
    correct: {
        width: 24, height: 20,
        borderRadius: 100,
        backgroundColor: "#4FA817",
        ...commonStyles.centerStyles,
    },
    notVisited: {
        width: 26, height: 22,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#ddd",
        ...commonStyles.centerStyles,
    },
});

