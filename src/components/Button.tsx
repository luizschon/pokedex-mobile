import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors, Sizing } from '../styles'

type ButtonProps = {
  text: string;
  color?: "login" | "signup" | "signout";
  variant?: "default" | "ghost";
} & PressableProps

const variantColor = {
  login: Colors.orange200,
  signup: Colors.purple200,
  signout: Colors.red200,
}

export default function Button({ text, color = "login", variant = "default", ...props}: ButtonProps) {
  return <Pressable 
    style={ variant === "default" ? 
      StyleSheet.compose(styles.default, { backgroundColor: variantColor[color] }) :  
      StyleSheet.compose(styles.ghost, { borderColor: variantColor[color] })}
    {...props}
  >
    <Text style={ variant === "default" ? styles.defaultText : 
      StyleSheet.compose(styles.ghostText, { color: variantColor[color] }) }>{text}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: Sizing.x60,
    borderRadius: 5,
    backgroundColor: Colors.blue100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizing.x20,
  },
  ghost: {
    height: Sizing.x60,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizing.x20,
  },
  defaultText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: Sizing.x22,
    color: Colors.white,
    opacity: 0.5,
  },
  ghostText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: Sizing.x22,
  }
})
