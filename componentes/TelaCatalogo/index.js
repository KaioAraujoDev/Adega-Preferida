import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';

import Vinho1 from '../../assets/vinho-branco.jpg'
import Vinho2 from '../../assets/vinho-rose.jpg'
import Vinho3 from '../../assets/vinho-seco.jpg'
import Vinho4 from '../../assets/vinho-especial.jpg'
export default function TelaCatalogo(){
    return(
        <ScrollView>
            <Text>Nosso Vinhos</Text>
            <Text>Trabalhamos com o mlehor vinhos dos seguintes tipo:Vinho branco,vinho rosé,vinho tinto e vinho seco.</Text>
            <View>
                <Image source={Vinho1}/>
                <Text>Chatigny chardonnay</Text>
                <Text>Vinho leve, refrescante e levemente cítrico de cor amarelo palha.Perfeito com carnes brancas e massa ao pesto.</Text>
            </View>
            <View>
                <Image source={Vinho1}/>
                <Text>Chatigny chardonnay</Text>
                <Text>Vinho leve, refrescante e levemente cítrico de cor amarelo palha.Perfeito com carnes brancas e massa ao pesto.</Text>
            </View>
            <View>
                <Image source={Vinho1}/>
                <Text>Chatigny chardonnay</Text>
                <Text>Vinho leve, refrescante e levemente cítrico de cor amarelo palha.Perfeito com carnes brancas e massa ao pesto.</Text>
            </View>
            <View>
                <Image source={Vinho1}/>
                <Text>Chatigny chardonnay</Text>
                <Text>Vinho leve, refrescante e levemente cítrico de cor amarelo palha.Perfeito com carnes brancas e massa ao pesto.</Text>
            </View>
        </ScrollView>
    )
}