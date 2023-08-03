import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { navBarStyles as styles } from './styles';
import { router } from 'expo-router';
import Share from '../../assets/images/Share';
import Back from '../../assets/images/Back';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

type NavBarProps = {
  title: string;
  backButton?: boolean;
  saveButton?: boolean;
  invert?: boolean;
  secondaryTitleFirst?: string;
  secondaryTitleSecond?: string;
  containerStyles?: { [key: string]: number | string };
  shareImgUrl?: string;
};
const NavBar = ({
  title,
  backButton,
  saveButton,
  invert,
  secondaryTitleFirst,

  secondaryTitleSecond,
  containerStyles,
  shareImgUrl,
}: NavBarProps) => {
  containerStyles =
    backButton && !saveButton ? { ...containerStyles, justifyContent: '' } : containerStyles;
  containerStyles =
    saveButton && !backButton
      ? { ...containerStyles, justifyContent: 'flex-end' }
      : containerStyles;

  const titleWhite = invert ? { color: 'white' } : {};

  const share = () => {
    Sharing.isAvailableAsync().then((res) => {
      if (res) {
        const fileUri =
          FileSystem.cacheDirectory + shareImgUrl!.slice(shareImgUrl!.lastIndexOf('/'));
        const options = {
          mimeType: 'image/jpeg',
          dialogTitle: 'Share the image',
          UTI: 'image/jpeg',
        };

        FileSystem.downloadAsync(shareImgUrl!, fileUri);

        Sharing.shareAsync(fileUri, options);
      }
    });
  };

  return (
    <View style={[styles.container, containerStyles]}>
      {backButton && (
        <TouchableOpacity style={[styles.backContainer]} onPress={router.back}>
          <Back stroke={invert ? 'white' : 'black'} />
        </TouchableOpacity>
      )}
      <View style={[styles.titleContainer]}>
        {secondaryTitleFirst && (
          <Text style={[styles.secondaryTitle, titleWhite]}>{secondaryTitleFirst}</Text>
        )}
        <Text style={[styles.title, titleWhite]}>{title}</Text>
        {secondaryTitleSecond && (
          <Text style={[styles.secondaryTitle, titleWhite]}>{secondaryTitleSecond}</Text>
        )}
      </View>
      {saveButton && (
        <TouchableOpacity style={[styles.backContainer]} onPress={share}>
          <Share stroke={invert ? 'white' : 'black'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavBar;
