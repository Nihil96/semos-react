import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../actions/authActions"

const Auth = () => {
    const isAutheticated = useSelector((state) => state.auth.isAutheticated)
    const dispatch = useDispatch()

    return <>
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
    </>
}

export default Auth