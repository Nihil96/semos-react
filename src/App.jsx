
import './App.css'
import { Button } from './examples/lecture_1/components/button/button'
import MyClassComponent from './examples/lecture_1/components/classComponent/classComponent'
import MyFirstComponent from './examples/lecture_1/components/myFirstComponent'

function App() {
  return (
    <div>
      <MyFirstComponent />
      {/* <MyFirstComponent /> */}
      <Button />
      <MyClassComponent />
    </div>
  )
}

export default App
