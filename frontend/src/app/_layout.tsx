import "../styles/global.css";

import { Raleway_300Light, Raleway_400Regular, Raleway_400Regular_Italic, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Sanchez_400Regular, Sanchez_400Regular_Italic } from "@expo-google-fonts/sanchez";


import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular, Raleway_300Light, Raleway_400Regular_Italic, Raleway_700Bold,
    Sanchez_400Regular, Sanchez_400Regular_Italic, 
    "Matchbook_400Regular" : require("../assets/fonts/MatchbookRegular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
