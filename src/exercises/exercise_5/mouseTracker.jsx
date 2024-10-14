import useMousePosition from "./hooks/useMousePosition"

function MouseTracker() {
  const { x, y } = useMousePosition()

  return (
    <div style={{ height: "100vh" }}>
      <h2>Mouse Position</h2>
      <p>
        Your Current Mouse Position: ({x}, {y})
      </p>

      <div
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: "10px",
          height: "10px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  )
}

export default MouseTracker
