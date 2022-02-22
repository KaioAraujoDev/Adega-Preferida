import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    imagem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo:{
        fontWeight:'bold',
        color:'white',
        fontSize:24,
        marginBottom:10,
    },
    descricao: {
        fontSize:15,
        color:'white',
        textAlign:'center',
        width:300,
    }
})

export default estilo;