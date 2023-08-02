import React from 'react';
import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import moment from 'moment';

//TODO loader while data fetching

const Album = () => {
    const { selectedCamera, date }  = useLocalSearchParams()

    //const { data, error, isLoading } = useSWR(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${moment(date).format('YYYY-MM-DD')}&api_key=DEMO_KEY&camera=${(selectedCamera as string).toLowerCase()}`, fetcher)

    return (
        <View>
            <Text>Album page</Text>
        </View>
    );
};

export default Album