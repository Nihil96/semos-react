import { useEffect, useState } from "react"

function ArrowKeyDisplay() {
  const [pressedKey, setPressedKey] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setPressedKey("up")
          break
        case "ArrowDown":
          setPressedKey("down")
          break
        case "ArrowLeft":
          setPressedKey("left")
          break
        case "ArrowRight":
          setPressedKey("right")
          break
        default:
          setPressedKey(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const displayKeys = () => {
    switch (pressedKey) {
      case "up":
        return (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Arrow UP
          </div>
        )
      case "down":
        return (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Arrow DOWN
          </div>
        )
      case "left":
        return (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
            }}
          >
            Arrow LEFT
          </div>
        )
      case "right":
        return (
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
            }}
          >
            Arrow RIGHT
          </div>
        )
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      {displayKeys()}
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {" "}
        Try pressing the arrow keys on your keyboard
      </p>
      {}
    </div>
  )
}

export default ArrowKeyDisplay
