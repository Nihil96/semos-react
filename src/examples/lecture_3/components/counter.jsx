import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 2)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export default Counter
