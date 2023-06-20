import { type } from "os"
import img from "./image/umbrella.jpg"

type style = {style:any}

const container = {
    textAlign: "center"
} as React.CSSProperties

const textH = {
    color: "#BDE0FF",
    fontSize: "24px"
}

const textP = {
    color: "#FFF",
    fontSize: "24px",
}

const sizeImg = {
    width: "60px"
}



function Days(props:any) {
    return (
        <div style={container}>
            <h1 style={textH}>{props.time}</h1>
            <img src={img} style={sizeImg}></img>
            <p  style={textP}>{props.weather}</p>
        </div>
    )
}

export default Days