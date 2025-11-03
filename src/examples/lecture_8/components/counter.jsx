import { useContext } from "react"
import { CounterContext } from "../context/counterContext"

function Counter(){
    const {count, increment, decrement, reset} = useContext(CounterContext)
    
    return(
        <>
        <h3>Simple Counter</h3>
        <span>Count: {count}</span>
        <br />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
    )
}

export default Counter