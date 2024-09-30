import { useState } from "react"

function DynamicName() {
  const [name, setName] = useState("Hristijan")

  function changeName() {
    setName("Stefan")
  }

  console.log("Child Component render")
  return (
    <div>
      <h3>My name is {name}</h3>
      <button onClick={changeName}>Change My Name</button>
    </div>
  )
}

export default DynamicName
