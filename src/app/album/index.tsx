import React from 'react';
import {View, Text, Image, ScrollView, FlatList} from "react-native";
import {useLocalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import moment from 'moment';
import {globalStyles} from "../../styles/globalStyles";

//TODO loader while data fetching

const Album = () => {
    const {selectedCamera, date} = useLocalSearchParams()

    const {
        data,
        error,
        isLoading
    } = useSWR(`${process.env.EXPO_PUBLIC_API_URL}photos?earth_date=${moment(date).format('YYYY-MM-DD')}&api_key=${process.env.EXPO_PUBLIC_API_DEMO_KEY}${selectedCamera ? `&camera=${(selectedCamera as string).toLowerCase()}` : ''}`, fetcher)

    if (data?.error?.message) {
        return <View><Text>{data.error.message}</Text></View>
    }

    if (isLoading) {
        return <View><Text>Loading...</Text></View>
    }

    return (
        <View style={[globalStyles.container]}>
            <ScrollView style={{flex: 1, width: '100%'}}>
                {data?.photos && data.photos.map(photo => (
                        <Image
                        key={photo.id} source={{uri: photo.img_src}} resizeMode='contain'
                        style={{borderWidth: 2, borderColor: 'red', width: 100, height: 100}}/>
                ))}
            </ScrollView>
        </View>

    );
};

export default Album