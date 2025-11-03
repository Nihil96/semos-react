import { createContext, useState} from "react";

export const CounterContext = createContext(null)

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(10)

    const increment = () => setCount(prevCount => prevCount + 10)
    const decrement = () => setCount(prevCount => prevCount - 10)
    const reset = () => setCount(10)

    return (
        <CounterContext.Provider value={{count, increment, decrement, reset}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider