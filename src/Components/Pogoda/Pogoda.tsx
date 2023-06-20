import img from "./image/pogodaa.png";

const container = {
    display: "flex",
}

const textHead = {
    color: "#fff",
    fontSize: "26px",
    margin: "5px" 
}

const textH = {
    color: "#fff",
    fontSize: "70px",
    margin: "0px"
}


const textP = {
    color: "#BDE0FF",
    fontSize: "24px",
    margin: "5px" 
}

const image = {
    width: "60px",
    height: "60px",
    margin: "15px"
}

function Pogoda() {
    return (
        <div style={container}>
            <div style={container}>
            <h2 style={textH}>+9°</h2>
            <img src={img} style= {image}></img>
            </div>
            <div>
             <h1 style={textHead}>Облачно с прояснениями</h1>
             <p style={textP}>Ощущается как +5°</p>
            </div>
        </div>
    )
}

export default Pogoda