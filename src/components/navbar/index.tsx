import React from 'react';
import {View, Text} from "react-native";
import {navBarStyles as styles} from './styles'

type NavBarProps = {
    title: string
}
const NavBar = ({title}: NavBarProps) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>
                {title}
            </Text>
        </View>
    );
};

export default NavBar;