import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen'
import {router} from "expo-router";

//TODO do smthng with styles in dateCamSelector
//TODO made navHeader
//TODO disable future dates in datePicker
//TODO made calendar with disabled dates if no photos for this date? //hard

export default function App() {
  const [fontsLoaded] = useFonts({
    'terminal-dosis': require('../assets/fonts/terminal-dosis.ttf'),
    'terminal-dosis-medium': require('../assets/fonts/terminal-dosis-medium.ttf'),
    'terminal-dosis-semibold': require('../assets/fonts/terminal-dosis-semibold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync().then(() => router.replace('/dateCamSelector'))
  }

  return null
}

