import "../styles/global.css";

import { Raleway_300Light, Raleway_400Regular, Raleway_400Regular_Italic, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Sanchez_400Regular, Sanchez_400Regular_Italic } from "@expo-google-fonts/sanchez";

import { useFonts } from "expo-font";
import { useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";

import { Stack } from "expo-router";

// Keep splash screen visible while rendering assets
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular, Raleway_300Light, Raleway_400Regular_Italic, Raleway_700Bold,
    Sanchez_400Regular, Sanchez_400Regular_Italic, 
    "Matchbook_400Regular" : require("../assets/fonts/Matchbook/MatchbookRegular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{headerShown: false}}></Stack>
}
