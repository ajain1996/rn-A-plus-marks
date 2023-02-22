import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'
import CustomButton from '../../Component/CustomButton'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import { commonStyles } from '../../Utils/commonStyles'
import Orientation from 'react-native-orientation-locker';
import { CustomDivider, RenderNumberBox, RenderStepsBox } from './QuestionScreen'

export default function AnswersScreen({ navigation }) {

    const [showAnswer, setShowAnswer] = React.useState(1)

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
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <CustomHeader title="Answers" navigation={navigation} />
            <Text />
            <ScrollView>
                <RenderStepsBox
                    list={[
                        "Step 1 General Intelligence",
                        "Step 2 General Knowledge",
                        "Step 3 Elementary Mathematics",
                        "Step 4 English",
                        "Step 4 Hindi",
                    ]}
                    onPress={() => { }}
                />
                <CustomDivider />
                <View style={{ height: 6 }} />

                <RenderNumberBox
                    list={[1, 2, 3, 4, 5, 6, 7, 8]}
                    onPress={(number) => { setShowAnswer(number) }}
                />

                <CustomDivider />

                <View style={{ paddingHorizontal: 16 }}>
                    <View style={commonStyles.rowStart}>
                        <Text style={{ ...commonStyles.fs12_500, marginTop: 8, color: COLORS.darkBlue }}>
                            By Mika
                        </Text>
                        <View style={{ width: 22 }} />
                        <Text style={{ ...commonStyles.fs12_500, marginTop: 8, color: COLORS.darkBlue }}>
                            22. May. 2021
                        </Text>
                    </View>
                    <View style={{ height: 8 }} />

                    <View style={{ ...commonStyles.rowStart, alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 16, color: COLORS.darkBlue, fontWeight: "600", width: 34 }}>
                            Q{showAnswer}.
                        </Text>
                        <View style={{ width: SIZES.width - 66 }}>
                            <Text style={{ fontSize: 16, color: COLORS.darkBlue, fontWeight: "600" }}>
                                Best Indian Mock Test in Mumbai Best Indian Mock Test in Mumbai
                            </Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ ...commonStyles.fs12_500, color: COLORS.darkBlue }}>
                                    Correct Answer - Option A
                                </Text>
                                <View style={{ height: 8 }} />
                                <Text style={{ ...commonStyles.fs12_500, color: COLORS.darkBlue }}>
                                    Your Answer - Option D
                                </Text>
                            </View>

                            <Text style={{ ...commonStyles.fs12_500, marginTop: 8, color: COLORS.darkBlue }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>

                            <Text style={{ ...commonStyles.fs12_500, marginTop: 8, color: COLORS.darkBlue }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>

                            <View style={{ height: 10 }} />

                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <CustomButton
                            text="Next"
                            fw="600" fs={16}
                            textColor={COLORS.white}
                            onPress={() => { navigation.navigate("Root") }}
                            buttonStyle={styles.submit}
                            underlayColor="#fff"
                        />
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    numberOfCarpets: {
        width: 46, height: 46, backgroundColor: COLORS.primary,
        marginLeft: 8, borderRadius: 8, ...commonStyles.centerStyles,
        marginRight: 4
    },
    button: {
        width: 65, height: 50,
        marginRight: 10,
        borderRadius: 6
    },
    button2: {
        width: 105, height: 46,
        marginRight: 6,
        borderRadius: 100
    },
    submit: {
        height: 50,
        width: SIZES.width / 1.1,
        backgroundColor: '#eee',
        marginTop: 10,
        borderRadius: 6
    },
})