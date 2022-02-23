import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';


import estilo from './estilo';

export default function TelaContato() {
    return (

        <View style={estilo.container}>
            <Text style={estilo.tituloMain}>
                Entre em contato conosco para comprar nossos produtos.
            </Text>
            <View style={estilo.containerContato}>
                <FontAwesome name="phone" size={60} style={estilo.icon} color="#680707" />
                <Text style={estilo.tituloContato}>Telefone:</Text>
                <Text style={estilo.descricaoContato}>+55 21 000000000</Text>
            </View>
            <View style={estilo.containerContato}>
                <AntDesign name="enviroment" size={60} color="#680707" />
                <Text style={estilo.tituloContato}>Endereço:</Text>
                <Text style={estilo.descricaoContato}>Av. 123, 222 - Rio de Janeiro RJ </Text>
            </View>
            <View style={estilo.containerContato}>
                <MaterialCommunityIcons name="email" size={60} color="#680707" />
                <Text style={estilo.tituloContato}>Email:</Text>
                <Text style={estilo.descricaoContato}>preferida@adega.com.br</Text>
            </View>
            <View style={estilo.containerContato}>
                <AntDesign name="instagram" size={60} color="#680707" />
                <Text style={estilo.tituloContato}>Instagram:</Text>
                <Text style={estilo.descricaoContato}>@adegapreferida</Text>
            </View>
        </View>
    )
}