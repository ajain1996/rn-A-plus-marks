import { View, Text } from 'react-native'
import React from 'react'
import { dropdownStyles } from '../Utils/dropdownStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { SIZES } from './Constant/Color';

export default function CustomDropdownComponent({ placeholder, data, style, containerStyle }) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [value, setValue] = React.useState("");

    const renderItem = (item) => {
        return (
            <View style={dropdownStyles.item}>
                <Text style={dropdownStyles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={[dropdownStyles.container, containerStyle]}>
            <Dropdown
                style={[dropdownStyles.dropdown, isFocus ? { borderColor: 'blue' } : {
                    width: SIZES.width / 1.25, alignSelf: "center", height: 50
                }, style]}
                placeholderStyle={dropdownStyles.placeholderStyle}
                selectedTextStyle={dropdownStyles.selectedTextStyle}
                inputSearchStyle={dropdownStyles.inputSearchStyle}
                iconStyle={dropdownStyles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderItem={renderItem}
            />
        </View>
    )
}