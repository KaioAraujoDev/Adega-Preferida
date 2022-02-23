import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    containerMain:{
        padding:20
    },
    tituloMain:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:15,
    },
    descricaoMain:{
        fontSize:15,
        marginBottom:25
    },
    image:{
        width:90,
        height:125,
        resizeMode:'contain'
    },
    card:{
        backgroundColor:'rgba(104,7,7,0.5)',
        padding:15,
        flexDirection:'row',
        borderRadius:10,
        marginBottom:15,
    },
    tituloCard:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },
    descricaoCard:{
        fontSize:14,
        width:240
    }
})

export default estilo;