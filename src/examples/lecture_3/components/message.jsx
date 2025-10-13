
function Message({msg, toggleMsg, show, color, changeMsgColor}){

    return(
        <>
            <span style={{color: color}}>{show ? msg : "No Message"}</span>
            <br />
            <button onClick={toggleMsg}>{show ? "Hide" : "Show"}</button>
            <button onClick={() => changeMsgColor("yellow")}>Change color</button>
        </>
    )
}

export default Message