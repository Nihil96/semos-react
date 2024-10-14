// import { Route, Routes } from "react-router-dom"
// import "./App.css"
// import Home from "./exercises/exercise_4/home"
// import { AuthProvider } from "./exercises/exercise_4/context/authContext"
// import Navbar from "./exercises/exercise_4/navbar"
// import Login from "./exercises/exercise_4/login"

import PostsDetail from "./examples/lecture_9/components/postsDetail"
import UsersDetail from "./examples/lecture_9/components/usersDetail"
import calculateAverage from "./examples/lecture_9/helpers/calculateAverage"
import { useAverage } from "./examples/lecture_9/hooks/useAverage"
import useCounter from "./examples/lecture_9/hooks/useCounter"

// function App() {
//   return (
//     <div>
//       <AuthProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </AuthProvider>
//     </div>
//   )
// }

// export default App

function App() {
  const { counter, increment, decrement, reset } = useCounter(50)
  const average = useAverage([1, 2, 3, 4, 5])

  const averageNumbers = calculateAverage([1, 2, 3, 4, 5])

  console.log(averageNumbers)
  return (
    <>
      {/* <PostsDetail /> */}
      {/* <UsersDetail /> */}
      <h1>Counter Value: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h2>Average: {average} - result from the custom hook</h2>
      <h2>Average: {averageNumbers} - result from the helper function</h2>
    </>
  )
}

export default App
