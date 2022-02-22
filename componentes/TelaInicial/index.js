import React from 'react';
import {View,TextReact,ImageBackground,Text} from 'react-native';

import Fundo from '../../assets/capa.jpg';
import estilo from './estilo';

export default function TelaInicial(){
    return(
        <ImageBackground source={Fundo} style={estilo.imagem} blurRadius={6}>
            <Text style={estilo.titulo}>Adega Preferida</Text>
            <Text style={estilo.descricao}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    )
}