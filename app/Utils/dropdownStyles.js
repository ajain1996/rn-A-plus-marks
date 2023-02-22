import { StyleSheet } from "react-native";
import { SIZES } from "../Component/Constant/Color";

export const dropdownStyles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 16,
        color: "#000",
        width: SIZES.width / 1.13
    },
    dropdown: {
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 10,
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        paddingLeft: 24,
        color: "#000"
    },
    icon: {
        marginRight: 5,
        width: 24
    },
    label: {
        position: 'absolute',
        backgroundColor: "#fff",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        color: "#999",
    },
    selectedTextStyle: {
        fontSize: 14,
        color: "#000"
    },
    iconStyle: {
        width: 30,
        height: 30,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 14,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        fontSize: 14,
        color: "#000",
        height: 20
    },
});