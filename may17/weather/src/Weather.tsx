import { useEffect, useState } from "react"
import {getWeather, WeatherResponse} from './WeatherService'
export const Weather:React.FC = ():JSX.Element => {
    const [location, setLocation] = useState<string>("Narasaraopet")
    const [weatherResponse, setWeatherResponse] = useState<WeatherResponse>();

    useEffect(()=>{
        const fetchWeather = async ()=>{
            const result = await getWeather(location)
            setWeatherResponse(result)
        }
        fetchWeather()
    }, [location])


    return <div>

        <select value={location} onChange={(e) => {setLocation(e.target.value)}}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Narasaraopet">Narasaraopet</option>
        </select>
    <p>
        
    Location Name : {weatherResponse?.name}
    </p>

    <p>
        
    Location Region : {weatherResponse?.region}
    </p>
    <p>
        
    Location Humidity : {weatherResponse?.humidity}
    </p>
    <p>
        
    Location Country : {weatherResponse?.country}
    </p>
        <p>
            
        Location Teperature : {weatherResponse?.tempCelcius} Celcius
        </p>

    </div>
}