// import { useEffect } from "react"
import { useEffect, useRef } from "react"

function TextInput() {
  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  function focusInput() {
    inputRef.current.focus()
  }

  // useEffect(() => {
  //   const inputElement = document.getElementById("input")
  //   console.log(inputElement)
  // }, [])

  useEffect(() => {
    console.log(buttonRef.current)
    buttonRef.current.style.backgroundColor = "red"
  }, [])

  return (
    <>
      <h2>Focus input</h2>
      <input ref={inputRef} id="input" type="text" />
      <button ref={buttonRef} onClick={focusInput}>
        Focus Button
      </button>
    </>
  )
}

export default TextInput
