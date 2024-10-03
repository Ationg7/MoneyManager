import { View, Text } from 'react-native'
import React from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


SplashScreen.preventAutoHideAsync();


const MainLayout = () => {

  

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  


  return (
   <Stack>
      <Stack.Screen options={{headerShown: false}}name="index"/>
      <Stack.Screen options={{headerShown: false}}name="(tabs)"/>
      <Stack.Screen options={{headerShown: false}}name="(ledger)"/>
   </Stack>
  )
}

export default MainLayout