import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import Feed from './src/pages/Feed';
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic
} from '@expo-google-fonts/montserrat';
import { UserProvider } from './src/context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/pages/RootNavigation';

export default function App() {
  let [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
  });

  if (!loaded) return null;

  return (
    <UserProvider>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
}
