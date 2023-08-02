import React from 'react';
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import moment from 'moment';
import {globalStyles} from "../../styles/globalStyles";
import {albumStyles} from "../album_json/styles";

//TODO loader while data fetching
//TODO типизировать работу с апи
//TODO

const Album = () => {
    const {selectedCamera, date} = useLocalSearchParams()

    const {
        data,
        error,
        isLoading
    } = useSWR(`${process.env.EXPO_PUBLIC_API_URL}photos?earth_date=${moment(date).format('YYYY-MM-DD')}&api_key=${process.env.EXPO_PUBLIC_API_KEY}${selectedCamera ? `&camera=${(selectedCamera as string).toLowerCase()}` : ''}`, fetcher)

    if (data?.error?.message) {
        return <View><Text>{data.error.message}</Text></View>
    }

    if (isLoading) {
        return <View><Text>Loading...</Text></View>
    }

    return (
        <View style={[globalStyles.container]}>
            <ScrollView style={{flex:1, width: '100%'}}>
                <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                    {data?.photos && data.photos.map(photo => (
                        <TouchableOpacity key={photo.id} onPress={() => router.push({pathname: '/album/23'})}>
                        <Image
                            key={photo.id} source={{uri: photo.img_src}} resizeMode='contain'
                            style={[albumStyles.imgCard]}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>

    );
};

export default Album