import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useUser } from '../context/UserContext'
import { Sizing, Colors } from '../styles'

export default function Header() {
  const { user } = useUser();
  
  return <View style={styles.greetings}>
    <Text style={styles.greetingsText}>Olá,{"\n"}
    <Text style={StyleSheet.compose(styles.greetingsText, styles.bold)}>{user && user.user.username}</Text>!
    </Text>
    <Pressable>
      <MaterialCommunityIcons name="logout" size={Sizing.x45} color={Colors.textDetail} />
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
greetings: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingsText: {
    fontFamily: "Montserrat_400Regular",
    color: Colors.heading,
    fontSize: 25,
  },
  bold: {
    fontFamily: "Montserrat_700Bold",
  },
    })
