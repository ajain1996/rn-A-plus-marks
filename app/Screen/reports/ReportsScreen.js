import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileHeader from '../profile/ProfileHeader'
import { BarChart, PieChart } from 'react-native-chart-kit'
import { COLORS, SIZES } from '../../Component/Constant/Color';
import LinearGradient from 'react-native-linear-gradient';
import { commonStyles } from '../../Utils/commonStyles';

const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
};

const pieChartData = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#dcdcdc",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

export default function ReportsScreen({ navigation }) {
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <ProfileHeader
                title="My Reports"
                navigation={navigation}
                settingOnPress={() => { }}
            />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <BarChart
                    style={{
                        margin: 8,
                        borderRadius: 6
                    }}
                    data={barChartData}
                    width={SIZES.width - 16}
                    height={280}
                    yAxisLabel="$"
                    chartConfig={{
                        // backgroundColor: "#fff",
                        backgroundGradientFrom: COLORS.darkBlue,
                        backgroundGradientTo: COLORS.lightBlue,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    verticalLabelRotation={30}
                />
                <View style={{ padding: 10 }}>
                    <LinearGradient colors={["#f7f8f9", "#f7f8f9"]} style={{
                        ...commonStyles.elevation9, padding: 8
                    }}>

                        <PieChart
                            style={{
                                margin: 8,
                                borderRadius: 6
                            }}
                            data={pieChartData}
                            width={SIZES.width - 50}
                            height={220}
                            chartConfig={{
                                backgroundGradientFrom: "#1E2923",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "#08130D",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional
                            }}
                            // verticalLabelRotation={30}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            // paddingLeft={"15"}
                            // center={[10, 10]}
                            absolute
                        />
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
    )
}