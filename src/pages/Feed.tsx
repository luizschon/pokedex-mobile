import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Card from '../components/Card'
import Header from '../components/Header';
import { api } from '../services/api';
import { Sizing } from '../styles';

export default function Feed() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [nextPage, setNextPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    if (loading || !nextPage) return

    setLoading(true)
    const response = await api.get('/pokemons?page=' + nextPage)
    const { data, next_page } = response.data

    setPokemons([...pokemons, ...data])
    setNextPage(next_page)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.message}>Dá uma olhada nesses Pokémons, mano</Text>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={pokemons} 
        renderItem={({ item }) => <Card pokemon={item} />}
        onEndReached={fetchPokemons}
        keyExtractor={pokemon => pokemon.id.toString()} 
        ListFooterComponent={() => <View />}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: Sizing.x30,
    paddingTop: Sizing.x35,
  },
  message: {
    fontFamily: "Montserrat_400Regular",
    fontSize: Sizing.x15,
    width: "100%",
    marginTop: Sizing.x20,
    marginBottom: Sizing.x27,
  }
});
