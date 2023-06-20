import Information from "../Information/Information";
import { useEffect, useState } from "react";

import imageWing from "../Information/image/wind.png"
import imageCompass from "../Information/image/compass.png"
import imageHumidity from "../Information/image/humidity.png"

const container = {
    display: "flex",
    borderBottom: "1px solid #fff",
}

interface IInformation {
    relativeHumidity: string,
    windSpeed: string,
    windDirection: string,
}

function mapInfoWeather(info: any):IInformation {
    console.log(info)
    const currentHour = new Date().getHours()
    const infoBoard = {

        relativeHumidity: info.hourly.relativehumidity_2m[currentHour],
        windSpeed: info.current_weather.windspeed,
        windDirection: info.current_weather.winddirection
    }
    console.log(infoBoard)
    return infoBoard
}

function InfoString() {

    const [weather, setWeather] = useState  <IInformation>()
    useEffect(() => {
        async function fetchWeather() {
            const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=57.15&longitude=65.53&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m&current_weather=true&windspeed_unit=ms&forecast_days=1")
            const parsedRes = await res.json()
            const mappedRes = mapInfoWeather(parsedRes)
            
            setWeather(mappedRes)
        }
        fetchWeather()
    }, [])

    return(
        <div style={container}>
            <Information img={imageWing} text={`${weather?.windSpeed} м/с С`}/>
            <Information img={imageHumidity} text={`${weather?.relativeHumidity}%`}/>
            <Information img={imageCompass} text={`${weather?.windDirection}°` }/>
        </div>
    )
}

export default InfoString