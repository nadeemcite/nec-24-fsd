import axios from 'axios';

const API_KEY = "39b8d66cf4604d2abba75807241605"

export interface WeatherResponse{
    name: string
    region: string
    country: string
    tempCelcius: number
    humidity: number
}

export const getWeather = async (location: string): Promise<WeatherResponse> =>{
    const results= await axios.get("http://api.weatherapi.com/v1/current.json", {
        params: {
            key: API_KEY,
            aqi: "no",
            q: location
        }
    })
    return {
        name:results.data.location.name,
        region: results.data.location.region,
        country: results.data.location.country,
        tempCelcius: results.data.current.temp_c,
        humidity: results.data.current.humidity
    }
}