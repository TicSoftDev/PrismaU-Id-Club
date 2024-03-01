import React from 'react';
import { Camera } from 'expo-camera';
import { View } from 'react-native';
import { styles } from '../../assets/styles/Qr';

function EscanerQr({ escanear, handleCodeScanned, scanned }) {
    return (
        <>
            {
                escanear &&
                <View style={styles.containerQr}>
                    <Camera
                        style={styles.camera}
                        onBarCodeScanned={scanned ? undefined : handleCodeScanned}
                    >
                    </Camera>
                </View>
            }
        </>
    );
}

export default EscanerQr;