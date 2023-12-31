import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import useSWR from 'swr';
import { fetcher } from '../../utils';
import moment from 'moment';
import { globalStyles } from '../../styles';
import { Image } from 'expo-image';
import { albumStyles, albumStyles as styles } from './styles';
import NavBar from '../../components/navbar';
import { CAMS_NAMES } from '../../constants';
import { Photo } from '../../types';

const Album = () => {
  const { selectedCamera, date } = useLocalSearchParams();

  const cameraName =
    CAMS_NAMES[CAMS_NAMES.findIndex((camera) => camera.key === selectedCamera)].value;

  const { data, error, isLoading } = useSWR<{ photos: Photo[] }>(
    `${process.env.EXPO_PUBLIC_API_URL}photos?earth_date=${moment(new Date(date as string)).format(
      'YYYY-MM-DD'
    )}&api_key=${process.env.EXPO_PUBLIC_API_KEY}${
      selectedCamera ? `&camera=${(selectedCamera as string).toLowerCase()}` : ''
    }`,
    fetcher
  );

  return (
    <View style={[globalStyles.container]}>
      <NavBar
        title={cameraName}
        secondaryTitleSecond={moment(new Date(date as string)).format('D MMM, YYYY')}
        backButton
      />
      {error ? (
        <Text>Error</Text>
      ) : (
        <View style={[albumStyles.scrollViewContainer]}>
          {isLoading ? (
            <View style={[albumStyles.loadingContainer]}>
              <Text>Loading...</Text>
            </View>
          ) : (
            <ScrollView>
              <View style={[albumStyles.galleryContainer]}>
                {data?.photos &&
                  data.photos.map((photo) => (
                    <TouchableOpacity
                      key={photo.id}
                      onPress={() =>
                        router.push({
                          pathname: '/album/picture',
                          params: { photo: photo.img_src, photoId: photo.id },
                        })
                      }>
                      <Image
                        alt="Image"
                        source={photo.img_src}
                        contentFit="cover"
                        style={[styles.imgCard]}
                      />
                    </TouchableOpacity>
                  ))}
              </View>
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
};

export default Album;
