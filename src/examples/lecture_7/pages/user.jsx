import { useParams } from "react-router-dom"

function User() {
  const { id } = useParams()

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User Profile Page</h2>
      <p>
        You are viewing the profile of user with ID: <strong>{id}</strong>
      </p>
    </div>
  )
}

export default User
