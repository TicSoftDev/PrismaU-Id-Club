import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from '../models/routes';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { resetUser } from '../redux/userSlice';

function useSesion() {

    const navigation = useNavigation();
    const dispatch = useDispatch();


    const logout = async () => {
        try {
            dispatch(resetUser());
            await AsyncStorage.removeItem('@token')
            navigation.navigate(Routes.LOGIN);
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        logout
    }
}

export default useSesion;