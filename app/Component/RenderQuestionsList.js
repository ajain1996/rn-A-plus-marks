import * as React from 'react';
import { Text, TouchableHighlight, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { commonStyles } from '../Utils/commonStyles';
import { SIZES } from './Constant/Color';
import InstructionsModal from './InstructionsModal';
import { RenderHexagonData } from './renderHexagon';

export const data = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
];

export default function RenderQuestionsList({ QUESTIONSLIST, currentQuestion, onPress }) {
    const questionsViews = data => {
        if (currentQuestion === data.question) {
            return (
                <RenderHexagonData data={data} />
            );
        } else if (currentQuestion !== data.question) {
            return (
                <TouchableHighlight onPress={() => { onPress(data) }} underlayColor="#fff">
                    <LinearGradient colors={["#F3F3F3", "#eee", "#D5D5D5"]}
                        style={{ ...styles.gridQuestions }}
                    >
                        <Text style={[styles.questionsText, { color: "#000" }]}>{data.question}</Text>
                    </LinearGradient>
                </TouchableHighlight>
            )
        }
    };
    return (
        <ScrollView horizontal>
            <View style={styles.container}>
                <InstructionsModal />
                <FlatList
                    data={QUESTIONSLIST}
                    scrollEnabled={true}
                    style={{}}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    numColumns={4}
                    renderItem={({ item }) => {
                        return questionsViews(item);
                    }}
                    ListFooterComponent={<View style={{ height: 200 }} />}
                />
                {/* <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {QUESTIONSLIST.map((value, index) => {
                            return questionsViews(value);
                        })}
                    </View>
                </ScrollView> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 20,
        padding: 8,
        height: 400
    },
    questionsText: {
        fontStyle: 'normal',
        fontWeight: '400',
        alignSelf: 'center',
        fontSize: 14,
        color: '#fff',
    },
    gridQuestions: {
        width: 42, height: 42,
        margin: 4,
        ...commonStyles.centerStyles,
        borderWidth: 0.8,
        borderColor: "#000",
        marginTop: 8,
        marginLeft: 10
    },
    modalView: {
        width: SIZES.width,
        borderRadius: 8,
        paddingVertical: 15,
    },
    correct: {
        width: 34, height: 28,
        borderRadius: 4,
        backgroundColor: "#4FA817",
        ...commonStyles.centerStyles,
    },
    notVisited: {
        width: 34, height: 28,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ddd",
        ...commonStyles.centerStyles,
    },
});