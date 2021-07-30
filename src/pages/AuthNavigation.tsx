import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './Onboarding'
import Login from './Login'
import Signup from './Signup'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

function AuthenticationStack() {
  return <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
}

export default function AuthNavigation() {
  return <Tab.Navigator tabBar={() => null}>
    <Tab.Screen name="Onboarding" component={Onboarding} />
    <Tab.Screen name="Auth" component={AuthenticationStack} />
  </Tab.Navigator>
}
