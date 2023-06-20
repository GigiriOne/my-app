import React, { ReactElement } from "react";
import Sky from "./cloud-in-blue-sky.jpg";
import { Provider } from "react-redux";
import Store from "../../Store";


const background = {
    width: "900px",
    height: "450px",
    borderRadius: "5px",
    margin: "auto",
    padding: "30px",
    background: `url(${Sky}) center no-repeat`,
}

interface IWeatherProps {
    children: React.ReactNode
}

function Weather(props:IWeatherProps) {
    return(
        <Provider store={Store} >
                <div style={background}>{props.children}</div>
        </Provider>
    ) 
}

export default Weather