import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { COLORS, SIZES } from '../../Component/Constant/Color'

export default function CustomBarchart() {
    return (
        <View>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={SIZES.width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: COLORS.darkBlue,
                    backgroundGradientFrom: COLORS.darkBlue,
                    backgroundGradientTo: COLORS.lightBlue,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 6
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    margin: 8,
                    borderRadius: 6
                }}
            />
        </View>
    )
}

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Rainy Days"] // optional
};

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

export const CustomLineChart = () => {
    return (
        <LineChart
            data={data}
            width={SIZES.width}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
            style={{
                margin: 8,
                borderRadius: 6
            }}
        />
    );
}