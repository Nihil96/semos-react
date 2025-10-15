import { useEffect, useState } from "react"

function InfiniteLoop(){
    const [count, setCount] = useState(0)

    // this will cause infinite loop
    useEffect(() => {
        setCount(count + 1)
    })

    // this will cause infinite loop as well
    useEffect(() => {
        setCount(count + 1)
    }, [count])

    return (
        <>
        <p>Infinite Loop</p>
        <span>Count: {count}</span>    
        </>
    )
}

export default InfiniteLoop