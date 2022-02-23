import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import Vinho1 from '../../assets/vinho-branco.jpg'
import Vinho2 from '../../assets/vinho-rose.jpg'
import Vinho3 from '../../assets/vinho-seco.jpg'
import Vinho4 from '../../assets/vinho-especial.jpg'

import estilo from './estilo';

export default function TelaCatalogo() {
    return (
        <ScrollView style={estilo.containerMain}>
            <Text style={estilo.tituloMain}>Nossos Vinhos</Text>
            <Text style={estilo.descricaoMain}>Trabalhamos com o melhor vinhos dos seguintes tipo:Vinho branco,vinho rosé,vinho tinto e vinho seco.</Text>
            <View style={estilo.card}>
                <Image source={Vinho1} style={estilo.image} />
                <View>
                    <Text style={estilo.tituloCard}>Chatigny chardonnay</Text>
                    <Text style={estilo.descricaoCard}>Vinho leve, refrescante e levemente cítrico de cor amarelo palha.Perfeito com carnes brancas e massa ao pesto.</Text>
                </View>
            </View>
            <View style={estilo.card}>
                 <Image source={Vinho2} style={estilo.image} />
                <View>
                    <Text style={estilo.tituloCard}>Concha y Toro Exportacion</Text>
                    <Text style={estilo.descricaoCard}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
                </View>
            </View>
            <View style={estilo.card}>
                <Image source={Vinho3} style={estilo.image} />
                <View>
                    <Text style={estilo.tituloCard}>Portada Winemaker's</Text>
                    <Text style={estilo.descricaoCard}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
                </View>
            </View>
            <View style={estilo.card}>
                <Image source={Vinho4} style={estilo.image} />
                <View>
                    <Text style={estilo.tituloCard}>Elvio Cogno Ravera Barolo</Text>
                    <Text style={estilo.descricaoCard}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
                </View>
            </View>
        </ScrollView>
    )
}