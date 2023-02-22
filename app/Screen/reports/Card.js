import * as React from 'react';
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';

const INGREDIENTS = [
    { name: 'Banana', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Apple', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Orange', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Banana', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Apple', image: 'https://picsum.photos/seed/picsum/200/300' },

    { name: 'Orange', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Banana', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Apple', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Orange', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Banana', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Apple', image: 'https://picsum.photos/seed/picsum/200/300' },
    { name: 'Orange', image: 'https://picsum.photos/seed/picsum/200/300' },

];
export default function CardData() {
    const ingredientnsViews = data => {
        return (
            <View style={styles.gridIngredients}>
                <Image
                    style={styles.ingredientImage}
                    resizeMode="contain"
                    source={data.image}
                />
                <Text style={styles.ingredientsText}>{data.name}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {INGREDIENTS.map((value, index) => {
                        return ingredientnsViews(value);
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    ingredientsText: {
        fontStyle: 'normal',
        fontWeight: '400',
        alignSelf: 'center',
        fontSize: 12,
        color: 'black',
    },

    gridIngredients: {
        marginTop: 12,
        width: '22%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        marginRight: 10,
        paddingBottom: 8,
        borderRadius: 8,
    },

    ingredientImage: {
        width: 15,
        alignSelf: 'center',
        height: 15,
    },
});