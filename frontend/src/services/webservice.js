import axios from 'axios';

export const tiposImoveisDisponiveisPorCidade = async (cidade) => {
    try {
        const response = await axios.get(`https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis/${cidade}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const cidadesDisponiveis = async () => {
    try {
        const response = await axios.get('https://sleepy-bayou-22688.herokuapp.com/api/cidadesdisponiveis');
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const tiposdeImoveisDisponiveis = async () => {
    try {
        const response = await axios.get('https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis');
        return response.data
    } catch (error) {
        console.log(error)
    }
}