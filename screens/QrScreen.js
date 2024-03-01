import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Camera } from 'expo-camera';
import BotonesQr from '../components/qr/BotonesQr';
import CodigoQR from '../components/qr/CodigoQR';
import EscanerQr from '../components/qr/EscanerQr';
import InfoBusquedaQr from '../components/qr/InfoBusquedaQr';
import { styles } from '../assets/styles/Qr';
import { useSelector } from 'react-redux';

export default function QrScreen() {

    const [generar, setGenerar] = useState(false);
    const [escanear, setescanear] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState({});

    const usuario = useSelector((state) => state.user);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const toggleGenerar = () => {
        setGenerar(!generar);
        setescanear(false);
        setScanned(false);
    };

    const toggleEscanear = () => {
        setGenerar(false);
        setScanned(false);
        setescanear(!escanear);
    };

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setescanear(!escanear);
        const objeto = JSON.parse(data);
        console.log(objeto);
        setData(objeto);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission...</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BotonesQr toggleEscanear={toggleEscanear} toggleGenerar={toggleGenerar}
                escanear={escanear} generar={generar} />
            <CodigoQR generar={generar} data={JSON.stringify(usuario)} />
            <EscanerQr escanear={escanear} scanned={scanned}
                handleCodeScanned={handleBarCodeScanned} />
            <InfoBusquedaQr data={data} scanned={scanned} />
        </View>
    )

}

