import { useState } from "react"
import {convertCtoF} from './temperatureService'


export const Temperature: React.FC = (): JSX.Element =>{

    const [celcius, setCelcius] = useState<number>(0)
    const [farenheit, setFarenheit] = useState<number>(0)

    const handleCalculate = async ()=>{
        try{
            const f = await convertCtoF(celcius)
            setFarenheit(f)
        }catch{
            alert("Something went wrong!")
        }
    }

    return <div>

        <input placeholder="Enter a temperature" value={celcius} onChange={(event)=>{
            setCelcius(parseFloat(event.target.value))
        }} />
        <button onClick={handleCalculate}>Calculate Farenhiet</button>
        <h1>{farenheit}</h1>
    </div>
}