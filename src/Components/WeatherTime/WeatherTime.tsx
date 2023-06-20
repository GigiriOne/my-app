import { useEffect, useState } from "react";
import Days from "../Days/Days";
import { getHours } from "../../utils/getTime";

const container = {
    display: "flex",
    justifyContent: "space-between",
}

interface IHour {
    time: Date,
    temperature: number,
}

function mapHourWeather(weather: any):IHour[] {
    const hourly = weather.hourly
    const res = []
    for (let i = 0; i < 12; i++) {
        const hour = {
            time: new Date(hourly.time[i]),
            temperature: Math.floor(hourly.temperature_2m[i]),
        }
        res.push(hour)
    }
    return res
}

function getCelsius(temperature: number) {
    if(temperature > 0) return `+${temperature}°` 
    else if (temperature == 0) return `${temperature}°` 
    else return `-${temperature}°`
}



function WeatherTime() {
    const [weather, setWeather] = useState<IHour[]>([])
    useEffect(() => {
        async function fetchWeather() {
            const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=57.15&longitude=65.53&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m&current_weather=true&windspeed_unit=ms&forecast_days=1")
            const parsedRes = await res.json()
            const mappedRes = mapHourWeather(parsedRes)
            setWeather(mappedRes)
        }
        fetchWeather()
    }, []) 
    

        
    return (
        <div  style={container} >
            {weather.map(({time, temperature}) => <Days time={getHours(time)} weather={getCelsius(temperature)} />)}
        </div>
    )
}

export default WeatherTime