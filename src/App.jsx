

import { useState } from 'react'
import './App.css'
import EffectOnce from './examples/lecture_4/components/effectOnce'
import EffectUnmount from './examples/lecture_4/components/EffectUnmount'
import EffectWithDeps from './examples/lecture_4/components/effectWithDeps'
import SimpleEffect from './examples/lecture_4/components/simpleEffect'
import InfiniteLoop from './examples/lecture_4/components/infiniteLoop'
import TextInput from './examples/lecture_4/components/textInput'
import Users from './examples/lecture_4/components/users'


function App() {
  // const [showComponent, setShowComponent] = useState(true)


  return(
    <>
      {/* <SimpleEffect /> */}
      {/* <EffectOnce /> */}
      {/* <EffectWithDeps /> */}
      {/* {showComponent ? <EffectUnmount showComponent={showComponent} /> : null}
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? `Hide` : `Show`}</button> */}
      {/* <InfiniteLoop /> */}
      {/* <TextInput /> */}
      <Users />
    </>
  )
}

export default App