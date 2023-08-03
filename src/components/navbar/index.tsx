import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {navBarStyles as styles} from './styles'
import {router} from "expo-router";

type NavBarProps = {
    title: string
    backButton?: boolean
    saveButton?: boolean
    secondaryTitleFirst?: string
    secondaryTitleSecond?: string
    containerStyles?: {[key: string]: number | string}
}
const NavBar = ({title, backButton, saveButton, secondaryTitleFirst, secondaryTitleSecond, containerStyles}: NavBarProps) => {
    containerStyles = backButton && !saveButton ? {...containerStyles, justifyContent: ''} : containerStyles
    containerStyles = saveButton && !backButton ? {...containerStyles, justifyContent: 'flex-end'} : containerStyles

    return (
        <View style={[styles.container, containerStyles]}>
            {backButton && <TouchableOpacity style={[styles.backContainer]}
                               onPress={router.back}
            >
                <Image
                    source={require('../../assets/images/back.png')}
                    resizeMode='contain'
                    style={{width: 5, height: 10}}
                />
            </TouchableOpacity>}
                <View style={[styles.titleContainer]}>
                    <Text style={[styles.secondaryTitle]}>{secondaryTitleFirst}</Text>
                    <Text style={[styles.title]}>
                        {title}
                    </Text>
                    <Text style={[styles.secondaryTitle]}>{secondaryTitleSecond}</Text>
                </View>
        </View>
    );
};

export default NavBar;