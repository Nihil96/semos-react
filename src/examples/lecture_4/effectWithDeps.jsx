import { useEffect, useState } from "react"

const EffectWithDeps = () => {
  const [count, setCounter] = useState(0)
  const [counterTwo, setCounterTwo] = useState(2)

  useEffect(() => {
    console.log("useEffect will run only if count is changing")
  }, [count])

  useEffect(() => {
    console.log("Second useEffect")
  })

  return (
    <div>
      <h2>Example of useEffect that is trigered with dependency array</h2>
      <button onClick={() => setCounter(count + 1)}>Increment Counter 1</button>
      <button onClick={() => setCounterTwo(counterTwo + 2)}>
        Increment Counter 2
      </button>
    </div>
  )
}

export default EffectWithDeps
