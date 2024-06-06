import axios from 'axios'

export const convertCtoF = async (celcius: number): Promise<number> =>{
    const response = await axios.get("http://localhost:8080/temperature", {
        params:{
            c: celcius
        }
    })
    return response.data as number
}