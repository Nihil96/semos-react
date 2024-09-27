import "./App.css"
import Counter from "./examples/lecture_3/components/counter"
import Greeting from "./examples/lecture_3/components/greeting"
import MessageNotificator from "./examples/lecture_3/components/messageNotificator"
import User from "./examples/lecture_3/components/user"

function App() {
  function greetAlert(name) {
    alert(`Hello, I am ${name}`)
  }

  let message = "Buy me some apples"

  return (
    <div>
      {/* <Counter />
      <Counter />
      <Counter /> */}
      {/* <Greeting name="Marko" greetAlert={greetAlert} /> */}
      <User isLoggedIn={false} />
      <MessageNotificator msg={message} />
    </div>
  )
}

export default App
