import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({   
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        justifyContent: 'flex-start',
        width: 100,
        height: 100,
    },
    titulo: {
        fontSize: 60,
        color: '#34433D',
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 40
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        fontSize:15
    },
    boton: {
        marginTop: 30,
        width: '80%',
        height: 50,
        backgroundColor: '#098221',
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
})