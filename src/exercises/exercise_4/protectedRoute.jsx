import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./context/authContext"

function ProtectedRoute({ element }) {
  const { isAutheticated } = useContext(AuthContext)

  return isAutheticated ? element : <Navigate to="/login" />
}

export default ProtectedRoute
