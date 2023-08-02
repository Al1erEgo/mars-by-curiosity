import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import {dateCamSelectorStyles} from './styles'
import {SelectList} from "react-native-dropdown-select-list/index";
import {CAMS_NAMES} from "../../constants/camsNames";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';
import {Link, router} from "expo-router";
import {globalStyles} from "../../styles/globalStyles";

const arrowIcon = <Image
    source={require('../../assets/dropdown.png')}
    resizeMode='contain'
    style={{width: 10, height: 5}}
/>

const DateCamSelector = () => {
    const [selectedCamera, setSelectedCamera] = useState<string>('')
    const [date, setDate] = useState<Date>(new Date)
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

    const handleDataPick = (date: Date) => {
        setDate(date)
        setDatePickerVisibility(false)
    };


    return (
        <View style={[globalStyles.container]}>
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
                        setSelected={setSelectedCamera}
                        defaultOption={CAMS_NAMES[0]}
                        data={CAMS_NAMES}/>
                </View>
                <View style={[dateCamSelectorStyles.inputGroup]}>
                    <Text style={[dateCamSelectorStyles.text]}>Date</Text>
                    <TouchableOpacity onPress={() => setDatePickerVisibility(true)}
                                      style={[dateCamSelectorStyles.datePickerButton, dateCamSelectorStyles.select]}>
                        <Text style={[dateCamSelectorStyles.text, dateCamSelectorStyles.selectInput]}>
                            {moment(date).format('D MMM, YYYY')}
                        </Text>
                        <Image
                            source={require('../../assets/calendar.png')}
                            resizeMode='contain'
                            style={{width: 24, height: 24}}
                        />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDataPick}
                        onCancel={() => setDatePickerVisibility(false)}
                    />
                </View>
                <View style={[dateCamSelectorStyles.inputGroup, {paddingTop: 20}]}>
                        <TouchableOpacity onPress={() => router.push({pathname: '/album', params: {selectedCamera, date}})}
                                          style={[dateCamSelectorStyles.datePickerButton, dateCamSelectorStyles.exploreButton]}>
                            <Text style={[dateCamSelectorStyles.text, dateCamSelectorStyles.exploreButtonText]}>
                                Explore
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
            <View></View>
            <ImageBackground source={require('../../assets/rover.png')} style={[dateCamSelectorStyles.bgImage]}/>
        </View>
    );
};

export default DateCamSelector
