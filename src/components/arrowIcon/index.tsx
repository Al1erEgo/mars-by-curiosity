import React from 'react';
import {Image} from "react-native";

export const ArrowIcon = () => {
    return (
        <Image
            source={require('../../assets/dropdown.png')}
            resizeMode='contain'
            style={{width:10,height:5}}
        />
    );
};
