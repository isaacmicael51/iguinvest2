import axios from 'axios';

export const tiposImoveisDisponiveisPorCidade = async (setLoading, cidade) => {
    try {
        const response = await axios.get(`https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis/${cidade}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const cidadesDisponiveis = async (setLoading) => {
    try {
        setLoading(true)
        const response = await axios.get('https://sleepy-bayou-22688.herokuapp.com/api/cidadesdisponiveis');
        setLoading(false)
        return response.data
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}

export const tiposdeImoveisDisponiveis = async (setLoading) => {
    try {
        setLoading(true)
        const response = await axios.get('https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis');
        setLoading(false)
        return response.data
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}