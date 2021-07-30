import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import { Colors, Sizing } from '../styles'

type LinkButtonProps = {
  text: string;
  variant?: "login" | "signup";
} & PressableProps

export default function LinkButton({ text, variant = "login", ...props}: LinkButtonProps) {
  return <Pressable style={styles.container} {...props}>
    <Text style={{
      ...styles.text, 
      color: variant === "login" ? Colors.orange200 : Colors.purple200,
    }}>{text}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: Sizing.x50,
    marginTop: Sizing.x25,
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: Sizing.x20,
  }
})
