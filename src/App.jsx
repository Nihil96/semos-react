
import { useState } from 'react'
import './App.css'
import Counter from './examples/lecture_3/components/counter'
import Greeting from './examples/lecture_3/components/greeting'
import Message from './examples/lecture_3/components/message'
import Parent from './examples/lecture_3/components/parent'
import User from './examples/lecture_3/components/user'

function App() {
  const [show, setShow] = useState(true)
  const [color, setColor] = useState("#cccccc")

  const greet = (name) => {
    alert(`Hello ${name}`)
  }

  function toggleMsg() {
   setShow(!show)
  }

  const changeColor = (newColor) => setColor(newColor)

  return(
    <>
    {/* Example of state in functional components */}
    {/* <Counter />
    <Counter />
    <Counter /> */}

    {/* Example of passing a function as a prop */}
    {/* <Greeting name="Darko" greetAlert={greet} /> */}

    {/* Example 3 */} 
    {/* <Message msg="Hello there, React is awesome" toggleMsg={toggleMsg} show={show} color={color} changeMsgColor={changeColor}/> */}
    
    {/* Example 4 */}
    {/* <Parent /> */}

    {/* Example 5 */}
    <User isLoggedIn={false}/>
    </>
  )
}

export default App