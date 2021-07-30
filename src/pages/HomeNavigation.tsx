import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Feed from './Feed'

const Tab = createMaterialTopTabNavigator()

export default function HomeNavigation() {
  return <Tab.Navigator tabBar={() => null}>
    <Tab.Screen name="Feed" component={Feed} />
  </Tab.Navigator>
}
