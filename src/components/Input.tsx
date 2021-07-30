import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, TextInputProps } from 'react-native'
import { Colors, Sizing } from '../styles'

export default function Input(props: TextInputProps) {
  return <SafeAreaView>
    <TextInput style={styles.input} {...props} />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: Sizing.x50,
    borderRadius: 5,
    borderColor: Colors.gray200,
    backgroundColor: Colors.gray100,
    borderWidth: 1,
    paddingHorizontal: Sizing.x20,
    marginVertical: Sizing.x20,
    color: Colors.text
  }
})
