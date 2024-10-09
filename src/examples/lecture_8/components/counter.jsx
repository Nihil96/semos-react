import { useContext } from "react"
import { CounterContext } from "../context/counterContext"

function Counter() {
  const { count, increment, decrement, reset } = useContext(CounterContext)

  console.log(count, "COUNTER")
  return (
    <div>
      <h2>Counter Component</h2>
      <span>Count: {count}</span>
      <br />

      <button onClick={increment}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
}

export default Counter
