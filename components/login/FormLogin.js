import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { stylesLogin } from '../../assets/styles/Login';
import imagenes from '../../assets/img/imagenes';

function FormLogin({ usuario, clave, setClave, setUsuario, handleLogin }) {
    return (
        <View style={stylesLogin.container}>
            <Image style={stylesLogin.logo} source={imagenes.logoPrisma} />
            <Text style={stylesLogin.titulo}>Bienvenido</Text>
            <Text style={stylesLogin.subtitulo}>Inicia sesion en tu cuenta</Text>
            <TextInput onChangeText={setUsuario}
                value={usuario} placeholder='Usuario' name style={stylesLogin.input} />
            <TextInput onChangeText={setClave} secureTextEntry={true}
                value={clave} placeholder='Password' style={stylesLogin.input} />
            <TouchableOpacity style={stylesLogin.boton} onPress={handleLogin} >
                <Text style={stylesLogin.text}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FormLogin;