import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import imagenes from '../assets/img/imagenes';
import { stylesProfile } from '../assets/styles/Profile';
import useSesion from '../hooks/useSesion';
import { useSelector } from 'react-redux';

export default function ProfileScreen() {

  const { logout } = useSesion();
  const usuario = useSelector((state) => state.user);

  return (
    <>
      {
        usuario != null ?
          <View style={stylesProfile.container}>
            <View style={stylesProfile.logo}>
              <Image source={imagenes.avatar} style={stylesProfile.avatar} />
            </View>
            <Text style={stylesProfile.titulo}>Informacion Personal</Text>
            <View style={stylesProfile.caja}>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='image-portrait' size={15} />
                  <Text style={stylesProfile.titulo2}>Nombres:</Text>
                </View>
                <Text>{usuario.Nombre}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='id-badge' size={15} />
                  <Text style={stylesProfile.titulo2}>Apellidos:</Text>
                </View>
                <Text>{usuario.Apellidos}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='calendar-alt' size={15} />
                  <Text style={stylesProfile.titulo2}>Fecha de nacimiento:</Text>
                </View>
                <Text>{usuario.Fecha}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='list-ol' size={15} />
                  <Text style={stylesProfile.titulo2}>Edad:</Text>
                </View>
                <Text>{usuario.Edad}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='id-card' size={15} />
                  <Text style={stylesProfile.titulo2}>Documento:</Text>
                </View>
                <Text>{usuario.Documento}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='transgender' size={15} />
                  <Text style={stylesProfile.titulo2}>Sexo:</Text>
                </View>
                <Text>{usuario.Sexo}</Text>
              </View>
            </View>
            <Text style={stylesProfile.titulo}>Informacion de Contacto</Text>
            <View style={stylesProfile.caja}>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='envelope' size={15} />
                  <Text style={stylesProfile.titulo2}>Correo:</Text>
                </View>
                <Text>{usuario.Correo}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='phone-volume' size={15} />
                  <Text style={stylesProfile.titulo2}>Telefono:</Text>
                </View>
                <Text>{usuario.Telefono}</Text>
              </View>
              <View style={stylesProfile.detalle}>
                <View style={stylesProfile.containerDetalle}>
                  <FontAwesome6 name='location-dot' size={15} />
                  <Text style={stylesProfile.titulo2}>Direccion:</Text>
                </View>
                <Text>{usuario.Direccion}</Text>
              </View>
            </View>

            <View style={stylesProfile.containerBoton}>
              <TouchableOpacity style={stylesProfile.boton} onPress={logout}>
                <Text style={stylesProfile.textBoton}>Salir</Text>
              </TouchableOpacity>
            </View>

          </View>
          :
          <View style={stylesProfile.containerCarga}>
            <ActivityIndicator size="large0" color="#098221" />
          </View>
      }
    </>

  )
}
