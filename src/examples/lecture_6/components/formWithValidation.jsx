import { useState } from "react"

function FormWithValidation() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim() === "") {
      setError("Username is required")
    } else {
      setError("")
      alert(`Form submited with username: ${username}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormWithValidation
