import React, { useState } from 'react';
import {
    Animated,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS, SIZES } from '../../Component/Constant/Color';
import Auth from '../../Service/Auth';
import { commonStyles } from '../../Utils/commonStyles';

export default function IntroScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slider = React.useRef(null);

    const [sliders, ,] = useState([
        {
            image: require('../../Assets/first_banner.jpg'),
        },
        {
            image: require('../../Assets/second_banner.jpg'),
        },
        {
            image: require('../../Assets/third_banner.jpg'),
        },
    ]);

    const SliderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image
                    resizeMode={'contain'}
                    style={styles.image}
                    source={item.image}
                />
            </View>
        );
    };

    const completeAppIntro = async () => {
        console.log('Entering the completeAppIntro: ');
        Auth.setIntro('true')
            .then(() => {
                console.log('Successfully saved data of intro screen: ');
                navigation.navigate('LoginScreen');
            })
            .catch(error => {
                console.log('Error in saving intro screen data: ', error);
            });
    };

    const changeSliderIndex = index => {
        const sliderLength = sliders?.length - 1;
        if (sliderLength >= index) {
            setCurrentIndex(index);
            slider.current.scrollToIndex({
                index: index,
                animated: true,
            });
        }
        if (index > 2) {
            completeAppIntro();
        }
    };

    const itemWidth = SIZES.width;

    function renderDots() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.dotsContainer}>
                    {sliders.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    const actualIndex =
                                        currentIndex > 0 ? currentIndex - 1 : currentIndex;
                                    changeSliderIndex(actualIndex);
                                }}
                                key={`dot-${index}`}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 16,
                                    height: 16,
                                    marginHorizontal: 5,
                                    borderWidth: currentIndex === index ? 1 : 0,
                                    borderColor: COLORS.darkBlue,
                                    borderRadius: 100,
                                }}>
                                <Animated.View
                                    style={[
                                        styles.dot,
                                        { width: 9, height: 9, backgroundColor: COLORS.darkBlue },
                                    ]}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }

    const renderSkipAndNextBtn = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                }}>
                <TouchableOpacity onPress={completeAppIntro}>
                    <Text style={styles.skipBtnText}>{'Skip'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.nextBtn}
                    onPress={() => {
                        const actualIndex = currentIndex + 1;
                        changeSliderIndex(actualIndex);
                    }}>
                    <Entypo name="chevron-small-right" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View
                style={{
                    paddingTop: '18%',
                    justifyContent: 'space-between',
                    height: '100%',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}>
                <FlatList
                    ref={slider}
                    getItemLayout={(data, index) => ({
                        length: itemWidth,
                        offset: itemWidth * index,
                        index,
                    })}
                    snapToInterval={itemWidth}
                    horizontal={true}
                    data={sliders}
                    renderItem={SliderItem}
                    scrollEnabled={false}
                    decelerationRate="fast"
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        left: 10,
                        right: 10,
                        bottom: '4%',
                        ...commonStyles.centerStyles,
                        backgroundColor: '#fff',
                    }}>
                    <View style={{ ...styles.introDetailStyle }}>
                        {renderDots()}
                        {renderTextAndInfo(currentIndex)}
                        {renderSkipAndNextBtn()}
                    </View>
                </View>
            </View>
        </>
    );
}

const renderTextAndInfo = currentIndex => {
    if (currentIndex === 0) {
        return (
            <View style={{}}>
                <Text style={styles.title}>Recharge your Mobile</Text>
                <View style={{ marginVertical: 8 }}>
                    <Text style={styles.description}>
                        Recharge your prepaid mobile and Get Assured cash back upto 10%
                        {/* Illustration for 1st Screen Mobile recharge */}
                    </Text>
                </View>
            </View>
        );
    } else if (currentIndex === 1) {
        return (
            <View style={{}}>
                <Text style={styles.title}>Pay your bills</Text>
                <View style={{ marginVertical: 8 }}>
                    <Text style={styles.description}>
                        Pay your Electricity, Water, Broadband, Landline, Postpaid, loan
                        bill payment and Get Assured cash back upto 10%
                    </Text>
                </View>
            </View>
        );
    } else if (currentIndex === 2) {
        return (
            <View style={{}}>
                <Text style={styles.title}>Get Assured Cashback</Text>
                <View style={{ marginVertical: 8 }}>
                    <Text style={styles.description}>
                        Get assured cash back upto 10% on recharge and bill payment.
                        {/* Illustration for 3rd screen get Cash back */}
                    </Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    card: {
        width: SIZES.width,
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 350,
        alignSelf: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: '#202020',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#333333',
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: 'blue',
        marginHorizontal: SIZES.radius / 2,
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZES.padding,
        position: 'absolute',
        bottom: 20,
    },
    introDetailStyle: {
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 15,
        height: 220,
        width: SIZES.width - 20,
        justifyContent: 'space-between',
    },
    skipBtnText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.darkBlue,
    },
    nextBtn: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
});