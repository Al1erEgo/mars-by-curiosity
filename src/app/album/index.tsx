import React from 'react';
import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

const Album = () => {
    const { selectedCamera, date } = useLocalSearchParams()

    console.warn('selectedCamera', selectedCamera)
    console.warn('date', date)

    return (
        <View>
            <Text>Album page</Text>
        </View>
    );
};

export default Album