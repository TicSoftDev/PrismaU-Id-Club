import React from 'react'
import { ActivityIndicator, Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import imagenes from '../assets/img/imagenes'
import { styles } from '../assets/styles/Home'

export default function HomeScreen() {


  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>PrismaU Id</Text>
        <Image source={imagenes.logoClub} style={styles.logo} resizeMode='contain'/>
    </SafeAreaView>
  );
};