import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { dateCamSelectorStyles as styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list/index';
import { CAMS_NAMES } from '../../constants';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { router } from 'expo-router';
import { globalStyles } from '../../styles';
import NavBar from '../../components/navbar';

const arrowIcon = (
  <Image
    source={require('../../assets/images/dropdown.png')}
    resizeMode="contain"
    style={{ width: 10, height: 5 }}
  />
);

const DateCamSelector = () => {
  const [selectedCamera, setSelectedCamera] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

  const handleDataPick = (date: Date) => {
    setDate(date);
    setDatePickerVisibility(false);
  };

  return (
    <View style={[globalStyles.container]}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={[styles.bgImage]}
        resizeMode="cover">
        <NavBar title="Select Camera and Date" />
        <View style={[styles.inputsBlock]}>
          <View style={[styles.inputGroup]}>
            <Text style={[styles.text]}>Rover Camera</Text>
            <SelectList
              arrowicon={arrowIcon}
              fontFamily="terminal-dosis"
              dropdownTextStyles={styles.selectInput}
              inputStyles={styles.selectInput}
              boxStyles={styles.select}
              dropdownStyles={styles.selectItem}
              setSelected={setSelectedCamera}
              defaultOption={CAMS_NAMES[0]}
              data={CAMS_NAMES}
            />
          </View>
          <View style={[styles.inputGroup]}>
            <Text style={[styles.text]}>Date</Text>
            <TouchableOpacity
              onPress={() => setDatePickerVisibility(true)}
              style={[styles.datePickerButton, styles.select]}>
              <Text style={[styles.text, styles.selectInput]}>
                {moment(date).format('D MMM, YYYY')}
              </Text>
              <Image
                source={require('../../assets/images/calendar.png')}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDataPick}
              onCancel={() => setDatePickerVisibility(false)}
            />
          </View>
          <View style={[styles.inputGroup, { paddingTop: 20 }]}>
            <TouchableOpacity
              onPress={() => router.push({ pathname: '/album', params: { selectedCamera, date } })}
              style={[styles.datePickerButton, styles.exploreButton]}>
              <Text style={[styles.text, styles.exploreButtonText]}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DateCamSelector;
