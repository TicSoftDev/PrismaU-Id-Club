import axios from "axios"
const URL = 'https://api-club.prismau.co/api/login'

export const validarSesion = async (Documento, password) => {
    try {
        const res = await axios.post(URL, { Documento, password });
        return res.data;
    } catch (error) {
        console.log(error.message);
        throw error.message;
    }
}