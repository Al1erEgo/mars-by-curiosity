import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import {dateCamSelectorStyles} from './styles'


export const DateCamSelector = () => {
    return (
        <View style={[dateCamSelectorStyles.container]}>
            <View style={[dateCamSelectorStyles.title]}>
                <Text>Select Camera and Date</Text>
            </View>
            <View style={[dateCamSelectorStyles.inputsBlock]}>
            </View>
            <View></View>
            <ImageBackground source={require('../../assets/rover.png')} style={[dateCamSelectorStyles.bgImage]}/>
        </View>
    );
};
