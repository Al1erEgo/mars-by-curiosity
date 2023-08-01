import React, {useState} from 'react';
import {View, Text, ImageBackground, Button, Image, TouchableOpacity} from "react-native";
import {dateCamSelectorStyles} from './styles'
import {SelectList} from "react-native-dropdown-select-list/index";
import {CAMS_NAMES2} from "../../constants/camsNames";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';

const arrowIcon = <Image
    source={require('../../assets/dropdown.png')}
    resizeMode='contain'
    style={{width:10,height:5}}
/>

export const DateCamSelector = () => {
    const [selectedCamera, setSelectedCamera] = useState<string>(CAMS_NAMES2[0].key)
    const [date, setDate] = useState<Date | undefined>()
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        console.warn("A date has been picked: ", date);
        setDate(date)
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
                        arrowicon={arrowIcon}
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
                    <TouchableOpacity onPress={showDatePicker} style={[dateCamSelectorStyles.datePickerButton, dateCamSelectorStyles.select]}>
                        <Text style={[dateCamSelectorStyles.text, dateCamSelectorStyles.selectInput]}>
                            {moment(date).format('D MMM, YYYY')}
                        </Text>
                        <Image
                            source={require('../../assets/calendar.png')}
                            resizeMode='contain'
                            style={{width:24,height:24}}
                        />
                    </TouchableOpacity>
                    {/*<Button title="Show Date Picker" onPress={showDatePicker} />*/}
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
