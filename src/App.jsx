import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./exercises/exercise_4/home"
import { AuthProvider } from "./exercises/exercise_4/context/authContext"
import Navbar from "./exercises/exercise_4/navbar"
import Login from "./exercises/exercise_4/login"

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
