import img from "./image/wind.png"

const container = {
    display: "flex",
    
}

const textP = {
    color: "#FFF",
    fontSize: "24px"
}

const image = {
    width: "40px",
    height: "40px",
    margin: "20px 10px 20px 10px"
}

function Information(props: any) {
    return (
        <div style={container}>
            <img src={props.img} style={image}></img>
            <p style={textP}>{props.text}</p>
        </div>
    )
}

export default Information