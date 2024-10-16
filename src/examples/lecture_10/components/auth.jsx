import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../actions/authActions"

function Auth() {
  const isAutheticated = useSelector((state) => state.auth.isAutheticated)
  const dispatch = useDispatch()

  console.log(isAutheticated)

  return (
    <div>
      {isAutheticated ? (
        <div>
          <h2>Welcome, you are logged in!</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => dispatch(login())}>Login</button>
        </div>
      )}
    </div>
  )
}

export default Auth
