import * as React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SIZES } from '../../Component/Constant/Color';
import { commonStyles } from '../../Utils/commonStyles';

const slideList = [
    { image: require('../../Assets/i1.png') },
    { image: require('../../Assets/i2.png') },
    { image: require('../../Assets/i3.png') },
];

export default function HomeCarousel() {
    return (
        <FlatList
            data={slideList}
            renderItem={({ item }) => {
                return <Slide data={item} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}

function Slide({ data }) {
    return (
        <View style={{ ...commonStyles.centerStyles }}>
            <Image
                source={data.image}
                style={{ height: 220, width: SIZES.width - 30, borderRadius: 6 }}
            />
        </View>
    );
}
