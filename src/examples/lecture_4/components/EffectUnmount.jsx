import { useEffect } from "react"

function EffectUnmount({showComponent}){
    

    // similar as componentWillUnmount method
    useEffect(()=>{
        console.log("Component mounted!") // 2

        // cleanup function
        return () => console.log("Component will unmount!")
    }, [])

    useEffect(() => {
        console.log("first useEffect") // 3
    }, [showComponent])

    console.log("EffectUnmount component re-rendered!") // 1
    return(
        <>
            <h2>Example of useEffect with cleanup function</h2>
        </>
    )
}

export default EffectUnmount