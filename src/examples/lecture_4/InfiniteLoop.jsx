import { useEffect, useState } from "react"

function InfiniteLoop() {
  const [count, setCounter] = useState(0)

  // This will cause infinite loop
  useEffect(() => {
    setCounter(count + 1)
  })

  // This will cause infinite loop as well
  useEffect(() => {
    setCounter(count + 1)
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default InfiniteLoop
