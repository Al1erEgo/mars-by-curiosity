import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import moment from 'moment';
import {globalStyles} from "../../styles/globalStyles";
import {Image} from 'expo-image';
import {albumStyles as styles} from "./styles";
import NavBar from "../../components/navbar";
import {CAMS_NAMES} from "../../constants/camsNames";

//TODO loader while data fetching
//TODO типизировать работу с апи

const Album = () => {
    const {selectedCamera, date} = useLocalSearchParams()

    const cameraName = CAMS_NAMES[CAMS_NAMES.findIndex(camera => camera.key === selectedCamera)].value

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
            <NavBar title={cameraName} secondaryTitleSecond={moment(date).format('D MMM, YYYY')} backButton/>
            <View style={{flex: 0.8, width: '100%'}}>
                <ScrollView>
                    <View style={{
                        width: '100%',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 10
                    }}>
                        {data?.photos && data.photos.map(photo => (
                            <TouchableOpacity key={photo.id} onPress={() => router.push({
                                pathname: '/album/picture',
                                params: {photo: photo.img_src, photoId: photo.id}
                            })}>
                                <Image
                                    source={photo.img_src} contentFit='contain'
                                    style={[styles.imgCard]}/>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>

    );
};

export default Album