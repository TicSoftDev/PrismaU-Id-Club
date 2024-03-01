import React from 'react';
import { styles } from '../../assets/styles/Qr';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function CodigoQR({ generar, data }) {

    return (
        <>
            {
                generar &&
                <View style={styles.containerQr}>
                    <QRCode color='black' value={data} size={200} />
                </View>
            }
        </>
    );

}

export default CodigoQR;