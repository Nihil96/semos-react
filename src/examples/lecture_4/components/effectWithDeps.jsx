import { useEffect, useState } from "react"

function EffectWithDeps(){
    const [count, setCount] = useState(0)
    const [counterTwo, setCounterTwo] = useState(2)

    // similar to componentDidUpdate method
    useEffect(() => {
        console.log("useEffect will run only if count is changing!")
    }, [count])

    useEffect(() => {
        console.log("Second useEffect")
    })

    return(
        <>
            <h2>Example of a useEffect that is trigered with dependency array</h2>
            <button onClick={() => setCount(count + 1)}>Increment Counter 1</button>
            <button onClick={() => setCounterTwo(counterTwo + 2)}>Increment Counter 2</button>
        </>
    )
}

export default EffectWithDeps