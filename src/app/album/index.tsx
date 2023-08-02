import React from 'react';
import {View, Text, Image} from "react-native";
import {useLocalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import moment from 'moment';
import {globalStyles} from "../../styles/globalStyles";

//TODO loader while data fetching

const Album = () => {
    const { selectedCamera, date }  = useLocalSearchParams()

    const { data, error, isLoading } = useSWR(`${process.env.EXPO_PUBLIC_API_URL}photos?earth_date=${moment(date).format('YYYY-MM-DD')}&api_key=${process.env.EXPO_PUBLIC_API_KEY}&camera=${(selectedCamera as string).toLowerCase()}`, fetcher)

    return (
        <View style={[globalStyles.container]}>
            {data?.photos && data.photos.map( photo => (
                <Image key={photo.id} source={photo.img_src} resizeMode='contain' style={{width: '20%', height: '20%'}}/>
            ))}
        </View>
    );
};

export default Album