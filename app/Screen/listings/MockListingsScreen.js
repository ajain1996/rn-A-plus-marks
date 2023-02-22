import { View, Text, Image, StyleSheet, TouchableHighlight, FlatList } from 'react-native'
import React from 'react'
import { commonStyles } from '../../Utils/commonStyles'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import CustomButton from '../../Component/CustomButton'
import MockHeader from './MockHeader'

export default function MockListingsScreen({ navigation }) {
    const [listingsData, setListingsData] = React.useState([
        { image: require("../../Assets/m1.png") },
        { image: require("../../Assets/m2.png") },
        { image: require("../../Assets/m3.png") },
        { image: require("../../Assets/m4.png") },
        { image: require("../../Assets/m1.png") },
        { image: require("../../Assets/m2.png") },
        { image: require("../../Assets/m3.png") },
        { image: require("../../Assets/m4.png") },
    ]);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#f7f8f9" }}>
            <MockHeader title="Mock Test Listings" navigation={navigation} />

            <FlatList
                data={listingsData}
                style={{ paddingVertical: 12 }}
                renderItem={({ item }) => {
                    return (
                        <TouchableHighlight style={{ paddingHorizontal: 16, paddingVertical: 6 }}
                            onPress={() => { navigation.navigate("MockTestDetailScreen") }}
                            underlayColor="#eee"
                        >
                            <View style={{ ...commonStyles.card, padding: 12 }}>
                                <View style={{ ...commonStyles.rowStart, alignItems: "flex-start" }}>
                                    <Image
                                        source={item?.image}
                                        style={{ width: SIZES.width / 4.2, height: SIZES.width / 3.7, borderRadius: 8 }}
                                    />

                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={commonStyles.fs14_500}>Adda ka Maha Pack</Text>
                                        <Text style={{ ...commonStyles.fs11_400, color: "#999" }}>
                                            (Live Classes | Test Series | Video Course)
                                        </Text>
                                        <View style={{ height: 8 }} />

                                        <Text style={{ ...commonStyles.fs13_400, color: "#000" }}>
                                            Price: 4500
                                        </Text>

                                        <View style={{ alignItems: "flex-end" }}>
                                            <CustomButton
                                                text="Book Now"
                                                fw="600" fs={12}
                                                textColor={COLORS.white}
                                                onPress={() => { navigation.navigate("MockTestDetailScreen") }}
                                                buttonStyle={{ ...commonStyles.btn, width: 100, borderRadius: 8, height: 40 }}
                                                underlayColor="#fff"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    );
                }}
                ListFooterComponent={
                    <View style={{ height: 80 }} />
                }
            />
        </View>
    )
}