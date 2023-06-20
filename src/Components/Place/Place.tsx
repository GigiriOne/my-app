import { getHours } from "../../utils/getTime"
import Gps from "./img/gps.png"
import { CSSProperties } from "react"

const container = {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px",
    alignItems: "center",
}

const textHead = {
    color: "#fff",
    fontSize: "26px",
    margin: "0 0 5px 0"
}

const textP = {
    color: "#BDE0FF",
    fontSize: "24px",
    margin: "0"
}

const gpsButton = {
    width: "40px",
    height: "40px",
    margin: "0",
    paddingTop: "5px",
    border: "none",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.3)",
    font: "inherit",
    color: "inherit",
    cursor: "pointer",
} as React.CSSProperties;

const img = {
    width: "20px",
} as React.CSSProperties;

const containerButton = {
 
}

function Place (props:any) {
    return (
        <div style={container}>
        <div>
            <h1 style={textHead}> Центральный Округ, Тюмень </h1>
            <p style={textP}> Сейчас {getHours(new Date())}. Вчера в это время +9° </p>
        </div>
        <div style={containerButton}>
            <button style={gpsButton}><img src={Gps} style={img}></img></button>
        </div>
        </div>
    )
}

export default Place