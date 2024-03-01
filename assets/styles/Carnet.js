import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carnet: {
    width:'95%',
    justifyContent:'center',
  },
  sectionAvatar: {
    justifyContent: 'center'
  },
  avatar: {
    width: 180,
    height: 180,
    borderWidth: 4,
    borderColor: '#098221',
    borderRadius: 100
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  text2: {
    fontSize: 23,
    color: '#000',
    textAlign: 'left',
    marginTop: -5
  },
  identificacion: {
    backgroundColor: '#098221',
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    borderRadius: 50
  },
  cc: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  sectionAvatar: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

})