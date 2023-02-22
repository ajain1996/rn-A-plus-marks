import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import CustomButton from '../../Component/CustomButton'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import { commonStyles } from '../../Utils/commonStyles'
import { CustomCheckbox } from '../../Component/CustomCheckbox'
import Orientation from 'react-native-orientation-locker';
import Entypo from "react-native-vector-icons/Entypo";
import InstructionsModal, { data } from '../../Component/InstructionsModal'
import CardData from '../reports/Card'
import RenderQuestionsList from '../../Component/RenderQuestionsList'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDropdownComponent from '../../Component/CustomDropdownComponent'
import CustomDropdownBox from '../../Component/CustomDropdownBox'

const QUESTIONSLIST = [
    { question: 1 },
    { question: 2 },
    { question: 3 },
    { question: 4 },
    { question: 5 },
    { question: 6 },
    { question: 7 },
    { question: 8 },
    { question: 9 },
    { question: 10 },
    { question: 11 },
    { question: 12 },
    { question: 13 },
    { question: 14 },
    { question: 15 },
    { question: 16 },
    { question: 17 },
    { question: 18 },
    { question: 19 },
    { question: 20 },
    { question: 21 },
    { question: 22 },
    { question: 23 },
    { question: 24 },
    { question: 25 },
    { question: 26 },
    { question: 27 },
    { question: 28 },
    { question: 29 },
    { question: 30 },
];

const RESEND_OTP_TIME_LIMIT = 40;

export default function QuestionScreen({ navigation }) {

    let resendOtpTimerInterval;

    const [resendButtonDisabledTime, setResendButtonDisabledTime] = React.useState(
        RESEND_OTP_TIME_LIMIT,
    );

    const [questions, setQuestions] = React.useState(1);
    const [steps, setSteps] = React.useState("Step 1 General Intell...");
    const [questionsList, setQuestionsList] = React.useState(QUESTIONSLIST);
    const [showQuestionsList, setShowQuestionsList] = React.useState(true);

    React.useEffect(() => {
        Orientation.lockToLandscape();

        return () => {
            Orientation.removeOrientationListener(() => {
                Orientation.lockToPortrait();
            });
        }
    }, [])

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    React.useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <View style={{}}>
                <View style={{ justifyContent: "space-between" }}>
                    <View style={styles.timeStamp}>
                        <Text style={{ ...commonStyles.fs11_400, color: "#fff" }}>
                            Sections [Attempt any 1 of the 2 optional sections. Please click on the Check Box to attempt the section]
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, color: "#fff" }}>Time Left: 89:{resendButtonDisabledTime}</Text>
                    </View>
                    <RenderStepsBox
                        list={[
                            "Step 1 General Intell...",
                            "Step 2 General Knowl...",
                            "Step 3 Elementary Ma...",
                            "Step 4 English",
                            "Step 4 Hindi",
                        ]}
                        steps={steps}
                        onPress={(step) => { setSteps(step) }}
                    />
                    <View style={{ width: "100%", height: 36, backgroundColor: "#4E85C5", alignItems: "flex-end" }}>
                        <View style={{ ...commonStyles.rowStart, width: "25.6%", height: 36 }}>
                            <Text style={{ ...commonStyles.fs13_400, color: "#fff" }}>View in: </Text>
                            <View style={{ width: 16 }} />
                            <CustomDropdownBox
                                placeholder="English"
                                data={data}
                                style={{
                                    width: 120, borderRadius: 0, elevation: 0, borderWidth: 1, height: 30,
                                    paddingLeft: 12, backgroundColor: "#eee", borderColor: "#4E85C5",
                                }}
                                containerStyle={{ width: "52%" }}
                            />
                        </View>
                    </View>
                    {/* <CustomDivider /> */}

                    <Text style={styles.questionNumber}>
                        Question No. {questions}.
                    </Text>

                    <CustomDivider />

                    <View style={{ paddingHorizontal: 16, marginTop: -20 }}>
                        <View style={{ ...commonStyles.rowBetween, alignItems: "flex-start" }}>
                            <View style={{ ...commonStyles.rowStart, alignItems: "flex-start", width: "65%", paddingTop: 14 }}>
                                {/* <Text style={{ fontSize: 16, color: COLORS.darkBlue, fontWeight: "600", width: 50 }}>
                                        Q{questions}.
                                    </Text> */}
                                <View style={{}}>
                                    <Text style={{ ...commonStyles.fs15_500, color: COLORS.darkBlue }}>
                                        Which of the four changes given in the options would make the following equation correct?
                                    </Text>
                                    <CustomCheckbox
                                        title="IJ : MN"
                                        callback={() => { }}
                                    />

                                    <CustomCheckbox
                                        title="AB : XY"
                                        callback={() => { }}
                                    />

                                    <CustomCheckbox
                                        title="PQ : UV"
                                        callback={() => { }}
                                    />

                                    <CustomCheckbox
                                        title="KL : NO"
                                        callback={() => { }}
                                    />

                                    <View style={{ height: 10 }} />
                                </View>
                            </View>
                            <TouchableHighlight style={styles.rightArrow} onPress={() => { setShowQuestionsList(!showQuestionsList) }}>
                                <AntDesign size={20} color="#fff" name='right' />
                            </TouchableHighlight>
                            {showQuestionsList
                                ? <View style={{ width: "35%", borderWidth: 1, borderColor: "#000", marginTop: 8 }}>
                                    <RenderQuestionsList
                                        QUESTIONSLIST={questionsList}
                                        currentQuestion={questions}
                                        onPress={(number) => { setQuestions(number?.question) }}
                                    />
                                </View>
                                : <></>}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                <View style={commonStyles.rowStart}>
                    <CustomButton
                        text="Mark for Review & Next"
                        colors={["#fff", "#fff"]}
                        fw="600" fs={13}
                        textColor="#000"
                        onPress={() => {
                            if (questions <= 1) {
                                navigation.goBack()
                            } else {
                                setQuestions(prev => prev - 1)
                            }
                        }}
                        buttonStyle={{ ...styles.submit2 }}
                        underlayColor="#fff"
                    />
                    <View style={{ width: 10 }} />
                    <CustomButton
                        text="Clear Response"
                        colors={["#fff", "#fff"]}
                        fw="600" fs={13}
                        textColor="#000"
                        onPress={() => {
                            if (questions <= 1) {
                                navigation.goBack()
                            } else {
                                setQuestions(prev => prev - 1)
                            }
                        }}
                        buttonStyle={{ ...styles.submit2, width: SIZES.height / 6.2 }}
                        underlayColor="#fff"
                    />
                </View>
                <CustomButton
                    text={questions === questionsList?.length ? "Submit" : "Save & Next"}
                    fw="600" fs={16}
                    textColor={COLORS.white}
                    onPress={() => {
                        if (questions < questionsList?.length) {
                            setQuestions(prev => prev + 1)
                        } else {
                            navigation.navigate("AnswersScreen")
                        }
                    }}
                    buttonStyle={{ ...styles.submit, width: SIZES.height / 6 }}
                    underlayColor="#fff"
                />
            </View>
        </>
    )
}

export const RenderStepsBox = ({ list, steps, onPress }) => {
    const [showIModal, setShowIModal] = React.useState(false);

    return (
        <View style={{ marginBottom: -6 }}>
            <ScrollView horizontal style={{ paddingLeft: 0 }}>
                <View style={styles.rightArrow2}>
                    <AntDesign size={18} color="#ddd" name='caretleft' />
                </View>
                {
                    list.map((data, index) => {
                        return (
                            <View key={index}>
                                <CustomButton
                                    text={data}
                                    fw="700" fs={12}
                                    textColor={steps === data ? "#fff" : "#4E85C5"}
                                    colors={steps === data
                                        ? ["#4E85C5", "#4E85C5"]
                                        : ["#fff", "#fff"]}
                                    onPress={() => { onPress(data) }}
                                    buttonStyle={steps === data ? styles.button2 : styles.button2Select}
                                    underlayColor="#fff"
                                />
                            </View>
                        );
                    })
                }
                {/* <TouchableHighlight style={styles.iBtnContainer} underlayColor="#f7f8f9" onPress={() => { setShowIModal(true) }}>
                    <View style={styles.iBtn}>
                        <Entypo name="info" color="#fff" size={14} />
                    </View>
                </TouchableHighlight> */}
            </ScrollView>

            {/* <InstructionsModal
                modalVisible={showIModal}
                callback={() => { setShowIModal(false) }}
            /> */}
        </View>
    );
}

export const RenderNumberBox = ({ list, currentQuestion, onPress }) => {
    return (
        <ScrollView horizontal style={{ paddingLeft: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            {
                list.map((data, index) => {
                    return (
                        <View key={index}>
                            <CustomButton
                                text={data}
                                fw="600" fs={16}
                                textColor="#fff"
                                colors={
                                    currentQuestion === data
                                        ? ["#B82D06", "#B82D06"]
                                        : [COLORS.darkBlue, COLORS.lightBlue]
                                }
                                onPress={() => { onPress(data) }}
                                buttonStyle={{
                                    ...styles.button,
                                    borderBottomLeftRadius: currentQuestion === data ? 30 : 8,
                                    borderBottomRightRadius: currentQuestion === data ? 30 : 8
                                }}
                                underlayColor="#fff"
                            />
                        </View>
                    );
                })
            }
            <View style={{ width: 10 }} />
        </ScrollView>
    );
}

export const CustomDivider = () => {
    return (
        <View style={{ width: "100%", height: 1, backgroundColor: "#ccc", marginTop: 20, marginBottom: 12 }} />
    )
}

const styles = StyleSheet.create({
    rightArrow: {
        width: 25, height: 60, backgroundColor: "#000", borderRadius: 4, marginTop: "10%",
        ...commonStyles.centerStyles, marginRight: 10
    },
    rightArrow2: {
        width: 22, height: 40, backgroundColor: "#fff",
        ...commonStyles.centerStyles,
        borderWidth: 1, borderColor: "#ddd"
    },
    numberOfCarpets: {
        width: 46, height: 46, backgroundColor: COLORS.primary,
        marginLeft: 8, borderRadius: 8, ...commonStyles.centerStyles,
        marginRight: 4
    },
    button: {
        width: 65, height: 50,
        marginRight: 10,
        borderRadius: 6,
    },
    button2: {
        paddingHorizontal: 14, height: 35,
        // marginRight: 6,
        borderRadius: 0
    },
    button2Select: {
        paddingHorizontal: 14, height: 35,
        borderWidth: 1,
        borderColor: "#ddd"
    },
    submit: {
        height: 40,
        marginTop: 10,
    },
    submit2: {
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        width: SIZES.height / 4.8
    },
    iBtnContainer: {
        width: 46, height: 46, borderWidth: 1, borderColor: "#ddd", ...commonStyles.centerStyles
    },
    iBtn: {
        width: 26, height: 26, backgroundColor: "#5BB1FA", borderRadius: 100, ...commonStyles.centerStyles
    },
    timeStamp: {
        width: "100%", height: 40,
        backgroundColor: "#4E85C5",
        paddingHorizontal: 16,
        ...commonStyles.rowBetween
    },
    questionNumber: {
        ...commonStyles.fs13_500,
        color: COLORS.darkBlue,
        paddingHorizontal: 16,
        marginBottom: -14, marginTop: 4
    },
    buttonsWrapper: {
        ...commonStyles.rowBetween,
        marginBottom: 6,
        paddingHorizontal: 16,
        position: "absolute",
        bottom: 0, width: "69%",
    }
})