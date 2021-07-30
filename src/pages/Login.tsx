import { StackHeaderProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'
import { useUser } from '../context/UserContext'
import { api } from '../services/api'
import { Colors, Sizing } from '../styles'

export default function Login({ navigation }: StackHeaderProps) {
  const [username, setUsername] = useState<string>("")
  const [error, setError] = useState<string>("")
  const { setUser } = useUser()

  const handleLogin = () => {
    if (username === "") {
      setError("Preencha o campo acima")
      return
    }

    api
      .get("users/" + username)
      .then((response) => setUser(response.data))
      .catch(() => setError("Esse usuário não existe"))
  }

  return <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
    <Image style={styles.image} source={require("../../assets/login.png")} />
    <View style={styles.roundedBar} />
    <View style={styles.contentContainer}>
      <Text style={styles.heading}>Agora é a sua vez, treinador!</Text>
      <Text style={styles.message}>Entre na sua conta e comece a explorar o mundo Pokémon!</Text>
      <TextInput
      style={StyleSheet.compose(styles.input, {
        borderColor: error ? Colors.red200 : Colors.gray200,
        backgroundColor: error ? Colors.red100 : Colors.gray100,
      })}
        placeholder="Nome de usuário"
        value={username} 
        onChangeText={setUsername}
      />
      { error ? <Text style={styles.error}>{error}</Text> : null }
      <Button text="Faça login" onPress={handleLogin} />
      <LinkButton text="Não possui conta? Cadastre-se" onPress={() => navigation.navigate('Signup')} />
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    height: 304,
    width: 505,
    left: -75,
    zIndex: 98,
  },
  roundedBar: {
    width: "100%",
    height: 148,
    position: "absolute",
    backgroundColor: Colors.orange100,
    top: 286,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  contentContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    paddingHorizontal: Sizing.x27,
    top: 326,
  }, 
  heading: {
    width: "100%",
    fontFamily: "Montserrat_500Medium",
    fontSize: Sizing.x45,
    color: Colors.white,
    opacity: 0.5,
  },
  message: {
    width: "100%",
    fontFamily: "Montserrat_400Regular",
    fontSize: Sizing.x15,
    color: Colors.text,
    marginTop: Sizing.x62,
    alignSelf: "center",
  },
  input: {
    height: Sizing.x55,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: Sizing.x20,
    marginTop: Sizing.x20,
    color: Colors.text,
  },
  error: {
    width: "100%",
    color: Colors.red200,
    fontFamily: "Montserrat_400Regular",
    fontSize: Sizing.x15,
    paddingTop: Sizing.x05,
 }
})
