import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useUser } from '../context/UserContext';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator()

export default function RootNavigation() {
  const { user } = useUser()
  return <Stack.Navigator  screenOptions={{ headerShown: false }}>
  { !user ? (
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} /> 
    ) : (
      <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
    ) 
  }
  </Stack.Navigator>
}
