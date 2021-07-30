import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import OnboardingArrow from '../components/OnboardingArrow'
import { Colors, Sizing } from '../styles'

export default function Onboarding({ navigation }: MaterialTopTabBarProps) {
  const handleNavigation = () => {
    navigation.navigate('Login')
  }

  return <View>
    <Image style={styles.image} source={require("../../assets/onboarding.png")} />
    <View style={styles.roundedBar} />
    <View style={styles.contentContainer}>
      <Text style={styles.heading}>Você está na Pokédex!</Text>
      <Text style={styles.message}>Aqui você pode buscar seus Pokémons favoritos e elevar o seu nível analisando as estatísticas.</Text>
      <View style={styles.buttonWrapper}>
        <OnboardingArrow onPress={handleNavigation}/>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  image: {
    height: 405,
    aspectRatio: 4/3,
    left: -120,
    zIndex: 99,
  },
  roundedBar: {
    width: "100%",
    height: 148,
    position: "absolute",
    backgroundColor: Colors.blue100,
    top: 373,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: Sizing.x27,
    top: 413,
  }, 
  heading: {
    width: "100%",
    textAlign: "right",
    fontFamily: "Montserrat_500Medium",
    fontSize: Sizing.x45,
    color: Colors.white,
    opacity: 0.5,
  },
  message: {
    width: "110%",
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    fontSize: Sizing.x22,
    color: Colors.text,
    marginTop: Sizing.x62,
    alignSelf: "center",
  },
  buttonWrapper: {
    marginTop: 40,
  }
})
