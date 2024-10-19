// import { Route, Routes } from "react-router-dom"
// import "./App.css"
// import Home from "./exercises/exercise_4/home"
// import { AuthProvider } from "./exercises/exercise_4/context/authContext"
// import Navbar from "./exercises/exercise_4/navbar"
// import Login from "./exercises/exercise_4/login"

import Counter from "./examples/lecture_10/components/counter"
import PostsDetail from "./examples/lecture_9/components/postsDetail"
import UsersDetail from "./examples/lecture_9/components/usersDetail"
import calculateAverage from "./examples/lecture_9/helpers/calculateAverage"
import { useAverage } from "./examples/lecture_9/hooks/useAverage"
import useCounter from "./examples/lecture_9/hooks/useCounter"
import MouseTracker from "./exercises/exercise_5/mouseTracker"

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
import "./App.css"
import WeatherDetails from "./exercises/exercise_7/components/weatherDetails"

function App() {
  return (
    <>
      <WeatherDetails />
    </>
  )
}

export default App
