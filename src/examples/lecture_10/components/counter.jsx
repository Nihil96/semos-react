import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, reset } from "../actions/counterActions"

function Counter(){
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter