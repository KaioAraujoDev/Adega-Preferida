import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:15
    },
    containerContato:{
        width:300,
        alignItems:'center',
        marginBottom:20
    },
    tituloMain:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:45,
    },
    tituloContato:{
        fontSize:17,
        fontWeight:'bold',
        color:'#680707',
        marginTop:10,
    },
    descricaoContato:{
        fontSize:14,
        color:'#680707'
    }
})

export default estilo;