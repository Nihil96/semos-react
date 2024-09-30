import { useEffect } from "react"

const EffectUnmount = ({ toggleBoolean }) => {
  useEffect(() => {
    console.log("useEffect")
  }, [toggleBoolean])

  useEffect(() => {
    console.log("Component mounted!")

    // cleanup function
    return () => console.log("Component will unmount")
  }, [])

  console.log("EffectUnmount component rendered")
  return (
    <div>
      <h2>Example of useEffect with cleanup function</h2>
    </div>
  )
}

export default EffectUnmount
