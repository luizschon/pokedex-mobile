import React from 'react' 
import { Image } from 'react-native'
import { Sizing } from '../styles'

const kinds: { [key: string]: any } = {
  grass: require("../../assets/grass-kind-icon.png"),
  fire: require("../../assets/fire-kind-icon.png"),
  water: require("../../assets/water-kind-icon.png"),
  electric: require("../../assets/eletric-kind-icon.png"),
  bug: require("../../assets/bug-kind-icon.png"),
  poison: require("../../assets/poison-kind-icon.png"),
  normal: require("../../assets/normal-kind-icon.png"),
  rock: require("../../assets/rock-kind-icon.png"),
  ghost: require("../../assets/ghost-kind-icon.png"),
  dragon: require("../../assets/dragon-kind-icon.png"),
  fighting: require("../../assets/fighting-kind-icon.png"),
  flying: require("../../assets/flying-kind-icon.png"),
  ground: require("../../assets/ground-kind-icon.png"),
  psychic: require("../../assets/psychic-kind-icon.png"),
  ice: require("../../assets/ice-kind-icon.png"),
  dark: require("../../assets/dark-kind-icon.png"),
  fairy: require("../../assets/fairy-kind-icon.png"),
  steel: require("../../assets/steel-kind-icon.png"),
}

type KindIconProps = {
  kind: string;
  size?: "small" | "big";
}

export default function KindIcon({ kind, size='small' }: KindIconProps) {
  return <Image style={{
    height: size === 'big' ? Sizing.x50 : Sizing.x42,
    width: size === 'big' ? Sizing.x50 : Sizing.x42, 
    marginRight: size === 'small' ? Sizing.x05 : 0, 
  }} source={kinds[kind]} />
}
