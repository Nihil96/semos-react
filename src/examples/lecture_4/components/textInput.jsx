import {useEffect, useRef} from "react"

function TextInput() {
    const inputRef = useRef(null)
    const buttonRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        buttonRef.current.style.backgroundColor = "red"
    }, [])


    return(
        <div>
            <input id="input" ref={inputRef} type="text" />
            <button ref={buttonRef} onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default TextInput