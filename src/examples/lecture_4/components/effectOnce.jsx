import { useEffect, useState } from "react"

function EffectOnce(){
    const [count, setCount] = useState(0)

    // similar to componentDidMount method
    useEffect(() => {
        console.log("useEffect runs only once after initial render")
    }, [])

    return (
        <>
        <h2>Example of useEffect that is triggered only once</h2>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         </>
    )
}

export default EffectOnce