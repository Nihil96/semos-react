import { useEffect, useState } from "react"

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMousePostion(event) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMousePostion)

    // Clean up function
    return () => {
      window.removeEventListener("mousemove", handleMousePostion)
    }
  }, [])

  return mousePosition
}

export default useMousePosition
