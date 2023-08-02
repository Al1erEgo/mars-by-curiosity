import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen'
import DateCamSelector from "./dateCamSelector";

export default function App() {
  const [fontsLoaded] = useFonts({
    'terminal-dosis': require('../assets/terminal-dosis.ttf'),
    'terminal-dosis-medium': require('../assets/terminal-dosis-medium.ttf')
  })

  useEffect(()=>{
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <View style={styles.container}>
      <DateCamSelector />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
