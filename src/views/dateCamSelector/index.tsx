import React, {useState} from 'react';
import {View, Text, ImageBackground} from "react-native";
import {dateCamSelectorStyles} from './styles'
import {SelectList} from "react-native-dropdown-select-list/index";
import {CAMS_NAMES, CAMS_NAMES2} from "../../constants/camsNames";

const dropdownSvg = require('../../assets/dropdown.svg')

export const DateCamSelector = () => {
    const [selectedCamera, setSelectedCamera] = useState<string>()

    return (
        <View style={[dateCamSelectorStyles.container]}>
            <View style={[dateCamSelectorStyles.title]}>
                <Text>Select Camera and Date</Text>
            </View>
            <View style={[dateCamSelectorStyles.inputsBlock]}>
                <View style={[dateCamSelectorStyles.inputGroup]}>
                    <Text style={[dateCamSelectorStyles.text]}>Rover Camera</Text>
                    <SelectList
                        //arrowicon={require('../../assets/dropdown.svg')}
                        fontFamily='terminal-dosis'
                        dropdownTextStyles={dateCamSelectorStyles.selectInput}
                        inputStyles={dateCamSelectorStyles.selectInput}
                        boxStyles={dateCamSelectorStyles.select}
                        dropdownStyles={dateCamSelectorStyles.selectItem}
                        setSelected={(value: {key: string, value: string})=> setSelectedCamera(value.key)}
                        defaultOption={CAMS_NAMES2[0]}
                        data={CAMS_NAMES2} />
                </View>
            </View>
            <View></View>
            <ImageBackground source={require('../../assets/rover.png')} style={[dateCamSelectorStyles.bgImage]}/>
        </View>
    );
};
