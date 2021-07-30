import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors, PokeColors, Sizing } from '../styles';
import { capitalize } from '../utils';
import KindIcon from './KindIcon';

type CardProps = {
  pokemon: Pokemon;
};

export default function Card({pokemon}: CardProps) {
  return (
    <View style={{...styles.card, backgroundColor: PokeColors[pokemon.kind.split(';')[0]]}}>
      <View style={{justifyContent: "space-between"}}>
        <View>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          <Text style={styles.number}>#{pokemon.id}</Text>
        </View>
        <View style={styles.kinds}>
          { pokemon.kind.split(";").map(kind => <KindIcon key={kind} kind={kind} />) }
        </View>
      </View>
      <Image source={require('../../assets/mdi_pokeball.png')} style={styles.pokeball} />
      <Image source={{ uri: pokemon.image_url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    height: Sizing.x150,
    borderRadius: Sizing.x12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: Sizing.x10,
    marginBottom: Sizing.x20,

    // ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // android
    elevation: 5,
  },
  name: {
    color: Colors.white,
    opacity: 0.5,
    fontFamily: "Montserrat_700Bold",
    fontSize: Sizing.x35,
  },
  number: {
    color: Colors.white,
    opacity: 0.5,
    fontFamily: "Montserrat_700Bold_Italic",
    fontSize: Sizing.x25,
  },
  kinds: {
    flexDirection: "row",
    marginBottom: Sizing.x10,
  },
  image: {
    width: Sizing.x160,
    height: Sizing.x160,
  },
  pokeball: {
    position: "absolute",
    top: -6,
    right: -6,
    width: Sizing.x150,
    height: Sizing.x150,
  },
});
