import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import imagenes from '../assets/img/imagenes';
import QRCode from 'react-native-qrcode-svg';
import { styles } from '../assets/styles/Carnet';

const CarnetScreen = () => {

    usuario = useSelector((state) => state.user);

    return (
        <>
            {
                usuario === null ?
                    <View View style={styles.container}>
                        <ActivityIndicator size="large0" color="#098221" />
                    </View> :
                    <View View style={styles.container}>
                        <ImageBackground source={imagenes.fondo} style={styles.carnet}>
                            <View style={styles.sectionAvatar}>
                                <Image source={imagenes.avatar} style={styles.avatar} resizeMode="contain" />
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.text}>{usuario.Nombre}</Text>
                                <Text style={styles.text2}>{usuario.Apellidos}</Text>
                                <View style={styles.identificacion}>
                                    <Text style={styles.cc}>CC: {usuario.Documento}</Text>
                                </View>
                            </View>
                            <View style={styles.sectionAvatar}>
                                <View></View>
                                <QRCode color='black' value={JSON.stringify(usuario)} size={100} />
                            </View>
                        </ImageBackground>
                    </View >
            }
        </>
    );
}

export default CarnetScreen