import { useState } from "react"

const Login = () => {
  const [rememberMe, setRemeberMe] = useState(false)

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Login</h1>
      <div>
        <button>Log in</button>
      </div>
      <div>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRemeberMe(e.target.checked)}
        />
        <label>Remeber Me</label>
      </div>
    </div>
  )
}

export default Login
