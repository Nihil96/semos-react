import useWindowSize from "../hooks/useWindowSize"

function WindowSizeDisplay(){
    const {width, height} = useWindowSize()

    let layoutStyle = {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
    }

    let layoutMessage;

    if(width < 600){
        layoutMessage = "This is a mobile layout!"
        layoutStyle.backgroundColor = "lightblue"
    } else if(width >= 600 && width <= 1024){
        layoutMessage = "This is a tablet layout!"
        layoutStyle.backgroundColor = "lightgreen"
    } else {
        layoutMessage = "This is a desktop layout!"
        layoutStyle.backgroundColor = "lightcoral"
    }

    return (
        <div style={layoutStyle}>
            <h2>Window Size Tracker</h2>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
            <h3>{layoutMessage}</h3>
        </div>
    )
}

export default WindowSizeDisplay