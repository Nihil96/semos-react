import { Navigate } from "react-router-dom"

function ProtectedRoute({ element, isAutheticated }) {
  return isAutheticated ? element : <Navigate to="/auth/signin" />
}

export default ProtectedRoute
