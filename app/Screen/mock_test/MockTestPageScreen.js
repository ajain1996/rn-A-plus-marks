import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import { commonStyles } from '../../Utils/commonStyles'
import CustomButton from '../../Component/CustomButton'
import { COLORS } from '../../Component/Constant/Color'

export default function MockTestPageScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title="Instructions" />
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ padding: 16 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={commonStyles.fs16_500}>Please read the instructions carefully</Text>
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs12_600, textDecorationLine: "underline" }}>General Instructions:</Text>

                    <View>
                        <RenderListText
                            index="1"
                            text="The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination."
                        />

                        <RenderListText
                            index="2"
                            text="The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:"
                        />
                        <View style={{ paddingLeft: 40, paddingRight: 10 }}>
                            <RenderListText
                                index="1"
                                text="You have not visited any question yet."
                            />
                            <RenderListText
                                index="2"
                                text="You have not answered the question."
                            />
                            <RenderListText
                                index="3"
                                text="You have answered the question."
                            />
                            <RenderListText
                                index="4"
                                text="You have not answered the question, but have marked the question for review."
                            />
                            <RenderListText
                                index="5"
                                text='The question(s) "Answers and Marked for Review" will be considered for evaluation.'
                            />
                        </View>

                        <RenderListText
                            index="3"
                            text="The Marked for Review status for a question simply indicates that you would like to look at that question again."
                        />

                        <RenderListText
                            index="4"
                            text='You can click on the ">" arrow which appears to the left of question palette to collapse the question palette thereby maximizing the question window. To view the question palette again, you can click on "< " which appears on the right side of question window.'
                        />

                        <RenderListText
                            index="5"
                            text='You can click on your "Profile" image on top right corner of your screen to change the language during the exam for entire question paper. On clicking of Profile image you will get a drop-down to change the question content to the desired language.'
                        />

                        <RenderListText
                            index="6"
                            text='You can click on https://g27.digialm.com/ASM/images/Down.png to navigate to the bottom and https://g27.digialm.com/ASM/images/Up.pngto navigate to the top of the question area, without scrolling.'
                        />
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs12_600, textDecorationLine: "underline" }}>General Instructions:</Text>

                    <View>
                        <RenderListText
                            index="7"
                            text="The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination."
                        />
                        <View style={{ paddingLeft: 40, paddingRight: 10 }}>
                            <RenderListText
                                index="a"
                                text="Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. By selecting answer to this question and thereafter going to the next question directly from question palette does NOT save your answer to the current question."
                            />
                            <RenderListText
                                index="b"
                                text="Click on Save & Next to save your answer for the current question and then go to the next question."
                            />
                            <RenderListText
                                index="c"
                                text="Click on Mark for Review & Next to save your answer for the current question, mark it for review, and then go to the next question."
                            />
                        </View>
                    </View>
                    <Text />

                    <View>
                        <Text style={{ ...commonStyles.fs12_600, textDecorationLine: "underline" }}>Answering a Question: </Text>
                        <RenderListText
                            index="8"
                            text="Procedure for answering a multiple choice type question:"
                        />
                        <View style={{ paddingLeft: 40, paddingRight: 10 }}>
                            <RenderListText
                                index="a"
                                text="To select your answer, click on the button of one of the options"
                            />
                            <RenderListText
                                index="b"
                                text="To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button"
                            />
                            <RenderListText
                                index="c"
                                text="To change your chosen answer, click on the button of another option"
                            />
                            <RenderListText
                                index="d"
                                text="To save your answer, you MUST click on the Save & Next button"
                            />
                            <RenderListText
                                index="e"
                                text="To mark the question for review, click on the Mark for Review & Next button."
                            />
                        </View>
                    </View>

                    <RenderListText
                        index="9"
                        text="To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering the question."
                    />

                    <View>
                        <Text style={{ ...commonStyles.fs12_600, textDecorationLine: "underline" }}>Navigating through sections: </Text>
                        <View style={{ paddingLeft: 20, paddingRight: 15 }}>
                            <RenderListText
                                index="10"
                                text="Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted."
                            />

                            <RenderListText
                                index="11"
                                text="After clicking the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section."
                            />

                            <RenderListText
                                index="12"
                                text="You can shuffle between sections and questions anytime during the examination as per your convenience only during the time stipulated."
                            />

                            <RenderListText
                                index="13"
                                text="Candidate can view the corresponding section summary as part of the legend that appears in every section above the question palette."
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ ...commonStyles.fs12_600, textDecorationLine: "underline" }}>Instruction for images: </Text>
                        <RenderListText
                            index="14"
                            text="To zoom the image provided in the question roll the cursor over it."
                        />
                    </View>

                    <CustomButton
                        text="Next"
                        fw="600" fs={16}
                        textColor={COLORS.white}
                        onPress={() => { navigation.navigate("MockTestPageScreen2") }}
                        buttonStyle={commonStyles.btn}
                        underlayColor="#fff"
                    />

                    <View style={{ height: 50 }} />
                </View>
            </ScrollView>
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