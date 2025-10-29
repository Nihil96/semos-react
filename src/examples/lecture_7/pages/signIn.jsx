import { useNavigate } from "react-router-dom"

function SignIn({isSignedIn, setIsSignedIn}){
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        setIsSignedIn(true)

        setTimeout(() => {
            navigate("/")
        }, 2000)
    }

    return (
        <div>
            <h1>SignIn Page</h1>
            {isSignedIn ? <p>You are signed in!</p> : 
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
            }
        </div>
    )
}

export default SignIn