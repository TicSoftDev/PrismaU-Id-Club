import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from '../../assets/styles/Qr';
import { Text, View } from 'react-native';

function InfoBusquedaQr({ scanned, data }) {
    return (
        <>
            {
                scanned &&
                <View style={styles.containerData}>
                    <Text style={styles.titulo}>Informacion Personal</Text>
                    <View style={styles.caja}>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='image-portrait' size={15} />
                                <Text style={styles.titulo2}>Nombres:</Text>
                            </View>
                            <Text>{data.Nombre}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='id-badge' size={15} />
                                <Text style={styles.titulo2}>Apellidos:</Text>
                            </View>
                            <Text>{data.Apellidos}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='calendar-alt' size={15} />
                                <Text style={styles.titulo2}>Fecha de nacimiento:</Text>
                            </View>
                            <Text>{data.Fecha}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='list-ol' size={15} />
                                <Text style={styles.titulo2}>Edad:</Text>
                            </View>
                            <Text>{data.Edad}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='id-card' size={15} />
                                <Text style={styles.titulo2}>Documento:</Text>
                            </View>
                            <Text>{data.Documento}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='transgender' size={15} />
                                <Text style={styles.titulo2}>Sexo:</Text>
                            </View>
                            <Text>{data.Sexo}</Text>
                        </View>
                    </View>
                    <Text style={styles.titulo}>Informacion de Contacto</Text>
                    <View style={styles.caja}>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='envelope' size={15} />
                                <Text style={styles.titulo2}>Correo:</Text>
                            </View>
                            <Text>{data.Correo}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='phone-volume' size={15} />
                                <Text style={styles.titulo2}>Telefono:</Text>
                            </View>
                            <Text>{data.Telefono}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.containerDetalle}>
                                <FontAwesome6 name='location-dot' size={15} />
                                <Text style={styles.titulo2}>Direccion:</Text>
                            </View>
                            <Text>{data.Direccion}</Text>
                        </View>
                    </View>
                </View>
            }
        </>
    );
}

export default InfoBusquedaQr;