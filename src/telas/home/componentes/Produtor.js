import { Text, View, Image } from "react-native"
import React from "react"

export default function Produtor({ nome, imagem, estrelas, distancia }){
    return <View>
        <Image source={imagem} accessibilityLabel={nome}/>
            <View>
                <Text>{ nome } </Text>
                <Text>{ distancia }</Text>
            </View>
        </View>
}