import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen'
import {router} from "expo-router";

export default function App() {
  const [fontsLoaded] = useFonts({
    'terminal-dosis': require('../assets/terminal-dosis.ttf'),
    'terminal-dosis-medium': require('../assets/terminal-dosis-medium.ttf')
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

