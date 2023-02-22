import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import { commonStyles } from '../../Utils/commonStyles'
import CustomButton from '../../Component/CustomButton'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import MockLanguageModal from './MockLanguageModal'
import Orientation from 'react-native-orientation-locker';

export default function MockTestPageScreen2({ navigation }) {
    const [languageModal, setLanguageModal] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const unsubscribe = navigation.addListener('focus', () => {
                Orientation.lockToPortrait();

                return () => {
                    Orientation.removeOrientationListener(() => {
                        Orientation.lockToLandscape();
                    });
                }
            });
            return unsubscribe;
        })()
    }, [navigation]);

    React.useEffect(() => {
        Orientation.lockToPortrait();

        return () => {
            Orientation.removeOrientationListener(() => {
                Orientation.lockToLandscape();
            });
        }
    }, [])

    return (
        <View>
            <CustomHeader title="Other Important Instructions" />
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ padding: 16 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ ...commonStyles.fs15_500, textDecorationLine: "underline" }}>
                            Other Important Instructions
                        </Text>
                    </View>
                    <Text />

                    <View style={{ borderWidth: 1, borderColor: "#999", padding: 1.5 }}>
                        <View style={{ borderWidth: 1, borderColor: "#999", padding: 14 }}>
                            <Text style={{ ...commonStyles.fs12_500, alignItems: "center", color: "#99665A" }}>
                                Write the statement given below (either Hindi or English) in the backside of
                            </Text>
                            <Text style={{ ...commonStyles.fs12_500, alignItems: "center", marginVertical: 8, color: "#99665A" }}>
                                Commission Copy in your own running handwriting and put your signature.
                            </Text>
                            <Text style={{ ...commonStyles.fs15_500, color: "#99665A" }}>
                                नीचे लिखे वाक्य को (हिंदी या अंग्रेजी में) आयोग प्रति के पीछे अपनी हस्तलिपि में लिखें और अपने हस्ताक्षर करें
                            </Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: "#999", padding: 14 }}>
                            <Text style={{ ...commonStyles.fs12_500, alignItems: "center", color: "#2980B9" }}>
                                Tough times don't last, but tough people do.
                            </Text>
                            <Text style={{ ...commonStyles.fs15_500, color: "#2980B9" }}>
                                कठिन समय टिकता नहीं है, लेकिन कठिन लोग टिकते हैं।
                            </Text>
                        </View>
                    </View>

                    <RenderListText
                        index="1"
                        text="The Question Paper is divided into five sections and all are objective type (MCQ) questions."
                    />

                    <RenderListText
                        index="2"
                        text="The section and other details are given below:"
                    />

                    <View style={styles.table}>
                        <View style={{ ...commonStyles.rowStart, width: "100%" }}>
                            <View style={[styles.table2, { width: "16%" }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    Number
                                </Text>
                            </View>
                            <View style={[styles.tableHead, { width: "30%", paddingHorizontal: 8 }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    Section Name
                                </Text>
                            </View>
                            <View style={styles.tableHead}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    Attempt
                                </Text>
                            </View>
                            <View style={[styles.tableHead, { width: "18%" }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    No. of Questions
                                </Text>
                            </View>
                            <View style={[styles.tableHead, { width: "14%" }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    Marks
                                </Text>
                            </View>
                        </View>

                        <RenderTableData
                            td1="I"
                            td2="Part A General Intelligence and Reasoning"
                            td3="Mandatory"
                            td4="25"
                            td5="25"
                        />

                        <RenderTableData
                            td1="II"
                            td2="Part B General Knowledge and General Awareness"
                            td3="Mandatory"
                            td4="25"
                            td5="25"
                        />

                        <RenderTableData
                            td1="III"
                            td2="Part C Elementary Mathematics"
                            td3="Mandatory"
                            td4="25"
                            td5="25"
                        />

                        <RenderTableData
                            td1="III"
                            td2="Part D English"
                            td3="Optional"
                            td4="25"
                            td5="25"
                        />

                        <RenderTableData
                            td1="III"
                            td2="Part D Hindi"
                            td3="Optional"
                            td4="25"
                            td5="25"
                        />

                        <View style={{ ...commonStyles.rowStart, width: "100%", marginTop: 1.5, marginBottom: 0.8 }}>
                            <View style={[styles.table2, { width: "66.6%" }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    Total
                                </Text>
                            </View>
                            <View style={[styles.table2, { width: "18%", marginLeft: 1.5 }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    100
                                </Text>
                            </View>
                            <View style={[styles.table2, { width: "14.4%", marginLeft: 1.5 }]}>
                                <Text style={{ ...commonStyles.fs10_700, alignSelf: "center" }}>
                                    100
                                </Text>
                            </View>
                        </View>
                    </View>

                    <RenderListText
                        index="3"
                        text="You will be given 90 minutes to attempt 100 questions."
                    />

                    <RenderListText
                        index="4"
                        text="Section I to III is mandatory."
                    />

                    <RenderListText
                        index="5"
                        text="Section IV and Section V are optional. You have to choose one of the sections- Section IV is English Language and Section V is Hindi Language."
                    />

                    <RenderListText
                        index="6"
                        text="While attempting to Section IV or Section V, if you switch from one section to another section, all the responses in the previously attempted optional section will be lost."
                    />

                    <RenderListText
                        index="7"
                        text="Questions will be available in English and Hindi for Section I to III. To see a given question in another language, a candidate can click on the View in drop-down and select the desired language."
                    /><Text />

                    <CustomButton
                        text="Next"
                        fw="600" fs={16}
                        textColor={COLORS.white}
                        onPress={() => { setLanguageModal(true) }}
                        buttonStyle={commonStyles.btn}
                        underlayColor="#fff"
                    />

                    <View style={{ height: 50 }} />
                </View>
            </ScrollView>

            <MockLanguageModal
                modalVisible={languageModal}
                callback={() => { setLanguageModal(false) }}
            />
        </View>
    )
}

const RenderListText = ({ index, text }) => {
    return (
        <View style={{ ...commonStyles.rowStart, alignItems: "flex-start", marginVertical: 5 }}>
            <Text style={commonStyles.fs12_400}>{index}.</Text>
            <Text style={commonStyles.fs12_400}>{text}</Text>
        </View>
    );
}

const RenderTableData = ({ td1, td2, td3, td4, td5 }) => {
    return (
        <View style={{ ...commonStyles.rowStart, width: "100%", marginTop: 1.5 }}>
            <View style={[styles.table2, { width: "16%" }]}>
                <Text style={{ ...commonStyles.fs10_500, alignSelf: "center" }}>
                    {td1}
                </Text>
            </View>
            <View style={[styles.tableHead, { width: "30%" }]}>
                <Text style={{ ...commonStyles.fs10_500, alignSelf: "center" }}>
                    {td2}
                </Text>
            </View>
            <View style={styles.tableHead}>
                <Text style={{ ...commonStyles.fs10_500, alignSelf: "center" }}>
                    {td3}
                </Text>
            </View>
            <View style={[styles.tableHead, { width: "18%" }]}>
                <Text style={{ ...commonStyles.fs10_500, alignSelf: "center" }}>
                    {td4}
                </Text>
            </View>
            <View style={[styles.tableHead, { width: "14%" }]}>
                <Text style={{ ...commonStyles.fs10_500, alignSelf: "center" }}>
                    {td5}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    table: {
        borderWidth: 1, borderColor: "#999", padding: 1.5
    },
    table2: {
        borderWidth: 1, borderColor: "#999", padding: 8, width: "20%", height: "100%"
    },
    tableHead: {
        borderWidth: 1, borderColor: "#999",
        padding: 8, marginLeft: 1.5,
        width: "20%", height: "100%",
    },
    tableHead2: {
        borderWidth: 1, borderColor: "#999",
        padding: 8, marginLeft: 1.5,
        width: "18%", height: "100%",
    }
});