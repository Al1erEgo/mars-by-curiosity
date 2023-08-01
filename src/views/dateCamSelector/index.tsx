import React, {useState} from 'react';
import {View, Text, ImageBackground, Button} from "react-native";
import {dateCamSelectorStyles} from './styles'
import {SelectList} from "react-native-dropdown-select-list/index";
import {CAMS_NAMES2} from "../../constants/camsNames";
import {ArrowIcon} from "../../components/arrowIcon";
import DateTimePickerModal from "react-native-modal-datetime-picker"

export const DateCamSelector = () => {
    const [selectedCamera, setSelectedCamera] = useState<string>(CAMS_NAMES2[0].key)
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View style={[dateCamSelectorStyles.container]}>
            <View style={[dateCamSelectorStyles.title]}>
                <Text>Select Camera and Date</Text>
            </View>
            <View style={[dateCamSelectorStyles.inputsBlock]}>
                <View style={[dateCamSelectorStyles.inputGroup]}>
                    <Text style={[dateCamSelectorStyles.text]}>Rover Camera</Text>
                    <SelectList
                        arrowicon={<ArrowIcon/>}
                        fontFamily='terminal-dosis'
                        dropdownTextStyles={dateCamSelectorStyles.selectInput}
                        inputStyles={dateCamSelectorStyles.selectInput}
                        boxStyles={dateCamSelectorStyles.select}
                        dropdownStyles={dateCamSelectorStyles.selectItem}
                        setSelected={(value: {key: string, value: string})=> setSelectedCamera(value.key)}
                        defaultOption={CAMS_NAMES2[0]}
                        data={CAMS_NAMES2} />
                </View>
                <View style={[dateCamSelectorStyles.inputGroup]}>
                    <Text style={[dateCamSelectorStyles.text]}>Date</Text>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
            </View>
            <View></View>
            <ImageBackground source={require('../../assets/rover.png')} style={[dateCamSelectorStyles.bgImage]}/>
        </View>
    );
};
