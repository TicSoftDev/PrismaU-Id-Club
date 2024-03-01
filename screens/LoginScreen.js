import React, { useState } from 'react'
import FormLogin from '../components/login/FormLogin';
import { validarSesion } from '../services/loginService';
import { Alert } from 'react-native';
import { Routes } from '../models/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/userSlice';

export default function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const [usuario, setUsuario] = useState('')
    const [clave, setClave] = useState('');

    const recargar = () => {
        setUsuario('');
        setClave('');
    }

    // const verify = async () => {
    //     const keys = await AsyncStorage.getAllKeys();
    //     const items = await AsyncStorage.multiGet(keys);
    //     if (items.length > 0) {
    //         navigation.navigate(Routes.PRINCIPAL);
    //     }
    // }

    // useEffect(() => {
    //     verify()
    // }, [])

    const handleLogin = async () => {
        try {
            if (usuario === "" || clave === "") {
                Alert.alert('No completado', 'Se deben llenar todos los campos');
                return;
            }
            const data = await validarSesion(usuario, clave);
            if (data.token === 0) {
                Alert.alert('No completado', 'Credenciales Invalidas');
                recargar();
            } else {
                await AsyncStorage.setItem('@token', data.token);
                // await AsyncStorage.setItem('@user', JSON.stringify(data.user));
                // recargar();

                dispatch(createUser(data.user));
                navigation.navigate(Routes.PRINCIPAL);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    }

    return (
        <>
            <FormLogin
                usuario={usuario}
                clave={clave}
                setClave={setClave}
                setUsuario={setUsuario}
                handleLogin={handleLogin} />
        </>
    )
}