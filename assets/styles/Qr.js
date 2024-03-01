import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    boton: {
        marginTop: 10,
        width: '50%',
        height: 50,
        backgroundColor: 'rgb(9, 130, 33)',
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBoton: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    camera: {
        flex: 1,
        width: 400,
    },
    containerQr: {
        marginTop: 30,
    },
    containerData: {
        width: "90%",
        marginTop: 30
    },
    titulo: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    caja: {
        backgroundColor: 'white',
        padding: 10,
        paddingHorizontal: 15,
        marginTop: 5,
        borderRadius: 10,
        marginBottom: 20,
      },
      containerDetalle: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      detalle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      titulo2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
      }
})