import { useEffect, useState } from "react"

const EffectOnce = () => {
  const [count, setCounter] = useState(0)

  useEffect(() => {
    console.log("useEffect runs only once after initial render")
  }, [])

  return (
    <div>
      <h2>Example of useEffect that is trigered only once</h2>
      <button onClick={() => setCounter(count + 1)}>Increment</button>
    </div>
  )
}

export default EffectOnce
