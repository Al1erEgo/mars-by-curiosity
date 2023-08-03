import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import {navBarStyles as styles} from './styles'
import {router} from "expo-router";
import Share from "../../assets/images/Share";
import Back from "../../assets/images/Back";

type NavBarProps = {
    title: string
    backButton?: boolean
    saveButton?: boolean
    invert?: boolean
    secondaryTitleFirst?: string
    secondaryTitleSecond?: string
    containerStyles?: { [key: string]: number | string }
}
const NavBar = ({
                    title,
                    backButton,
                    saveButton,
                    invert,
                    secondaryTitleFirst,
                    secondaryTitleSecond,
                    containerStyles
                }: NavBarProps) => {
    containerStyles = backButton && !saveButton ? {...containerStyles, justifyContent: ''} : containerStyles
    containerStyles = saveButton && !backButton ? {...containerStyles, justifyContent: 'flex-end'} : containerStyles

    const titleWhite = invert ? {color: 'white'} : {}

    return (
        <View style={[styles.container, containerStyles]}>
            {backButton && <TouchableOpacity style={[styles.backContainer]}
                                             onPress={router.back}
            >
                <Back stroke={invert ? 'white' : 'black'}/>
            </TouchableOpacity>}
            <View style={[styles.titleContainer]}>
                {secondaryTitleFirst && <Text style={[styles.secondaryTitle, titleWhite]}>{secondaryTitleFirst}</Text>}
                <Text style={[styles.title, titleWhite]}>
                    {title}
                </Text>
                {secondaryTitleSecond &&
                    <Text style={[styles.secondaryTitle, titleWhite]}>{secondaryTitleSecond}</Text>}
            </View>
            {saveButton && <TouchableOpacity style={[styles.backContainer]}
                                             onPress={()=>{}}
            >
                <Share stroke={invert ? 'white' : 'black'} />
            </TouchableOpacity>}
        </View>
    );
};

export default NavBar;