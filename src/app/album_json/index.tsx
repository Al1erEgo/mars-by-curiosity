import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import {Link, router, useLocalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import {globalStyles} from "../../styles/globalStyles";
import {albumStyles} from "./styles";

//TODO loader while data fetching
//TODO типизировать работу с апи

const AlbumJson = () => {
    const {selectedCamera, date} = useLocalSearchParams()

    const {
        data,
        error,
        isLoading
    } = useSWR(`https://jsonplaceholder.typicode.com/photos?albumId=1`, fetcher)

    if (data?.error?.message) {
        return (
            <View>
                <Text>{data.error.message}</Text>
            </View>
        )
    }

    if (isLoading) {
        return <View><Text>Loading...</Text></View>
    }

    return (
        <View style={[globalStyles.container]}>
            <ScrollView style={{flex: 1, width: '100%'}}>
                <View
                    style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                    {data && data.map(photo => (
                        <TouchableOpacity onPress={() => router.push({pathname: '/album/23'})}>
                            <Image
                                key={photo.id} source={{uri: photo.url}} resizeMode='contain'
                                style={[albumStyles.imgCard]}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>

    );
};

export default AlbumJson