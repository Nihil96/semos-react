import { useState } from "react"
// import DynamicName from "./examples/lecture_4/dynamicName"
// import SimpleEffect from "./examples/lecture_4/simpleEffect"
// import EffectOnce from "./examples/lecture_4/effectOnce"
// import EffectWithDeps from "./examples/lecture_4/effectWithDeps"
import EffectUnmount from "./examples/lecture_4/effectUnmount"
import InfiniteLoop from "./examples/lecture_4/InfiniteLoop"
import Users from "./examples/lecture_4/users"
import TextInput from "./examples/lecture_4/textInput"

function App() {
  const [toggleBoolean, setToggleBoolean] = useState(false)
  const [showComponent, setShowComponent] = useState(true)

  function stateIsChanging() {
    setToggleBoolean(!toggleBoolean)
  }

  // console.log("Parent component render")
  return (
    <div>
      {/* <DynamicName /> */}
      <button onClick={stateIsChanging}>Change State</button>
      <button onClick={() => setShowComponent(!showComponent)}>
        Show Component
      </button>
      {/* <SimpleEffect /> */}
      {/* <EffectOnce /> */}
      {/* <EffectWithDeps /> */}
      {/* {showComponent && <EffectUnmount toggleBoolean={toggleBoolean} />} */}
      {/* <Users /> */}
      <TextInput />
    </div>
  )
}

export default App
