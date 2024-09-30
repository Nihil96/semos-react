import { useEffect, useState } from "react"

const SimpleEffect = () => {
  const [count, setCounter] = useState(0)

  useEffect(() => {
    console.log("useEffect runs after every rerender")
  })

  return (
    <div>
      <h2>Example of simple useEffect</h2>
      <button onClick={() => setCounter(count + 1)}>Increment</button>
    </div>
  )
}

export default SimpleEffect
