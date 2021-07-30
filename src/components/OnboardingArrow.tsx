import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Sizing, Colors } from '../styles'

type OnboardingArrowProps = {
  onPress: () => void;
}

export default function OnboardingArrow({ onPress }: OnboardingArrowProps) {
  return <Pressable style={styles.container} onPress={onPress}>
    <AntDesign name="arrowright" size={24} color={Colors.white} style={styles.arrow} />
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    width: Sizing.x60,
    height: Sizing.x60,
    borderRadius: Sizing.x10,
    backgroundColor: Colors.blue200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  arrow: {
    opacity: 0.5,
  }
})
