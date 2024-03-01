import { StyleSheet } from "react-native";

export const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    margin: 15
  },
  containerCarga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  avatar: {
    width: 100,
    height: 100
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
  },
  containerBoton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  boton: {
    backgroundColor: 'rgb(9, 130, 33)',
    marginTop: 10,
    width: '50%',
    height: 50,
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
})