import axios from "axios"
const URL = 'https://api-club.prismau.co/api/usuarios';

export const consultarUsuarios = async () => {
    try {
        const res = await axios.get(URL);
        return res.data;
    } catch (error) {
        console.log(error.message);
        throw error.message;
    }
}