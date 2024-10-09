// import { useState } from "react"
import "./App.css"
import Header from "./examples/lecture_8/components/header"
import ParentCounter from "./examples/lecture_8/components/parentCounter"
import { CounterProvider } from "./examples/lecture_8/context/counterContext"

function App() {
  // const [user] = useState({ name: "Michael Smith", age: 30 })

  return (
    <div>
      {/* <Header /> */}
      <CounterProvider>
        <ParentCounter />
      </CounterProvider>
    </div>
  )
}

export default App
