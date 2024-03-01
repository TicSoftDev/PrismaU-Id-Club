import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles/Qr';

const BotonesQr = ({ generar, escanear, toggleGenerar, toggleEscanear }) => {
    return (
        <>
            <TouchableOpacity style={styles.boton} onPress={toggleGenerar}>
                <Text style={styles.textBoton}> {!generar ? 'Generar Codigo' : 'Cerrar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={toggleEscanear}>
                <Text style={styles.textBoton}>{!escanear ? 'Escanear Codigo' : 'Cerrar'}</Text>
            </TouchableOpacity>
        </>
    );
};

export default BotonesQr;