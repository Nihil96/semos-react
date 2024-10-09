import { useContext } from "react"
import { UserContext } from "../context/userContext"

function UserProfile() {
  const { user, updateName, addAddress } = useContext(UserContext)

  return (
    <div>
      <h2>Simple UserProfile Component</h2>
      User Name: {user.name ? user.name : "No user name"}
      <p>
        User Address:{" "}
        {user.address ? user.address : "The user does not have address yet"}
      </p>
      <br />
      <button onClick={() => updateName("John Smith")}>
        Change the user name
      </button>
      <button onClick={() => addAddress("Num.23 WhiteWall")}>
        Add user's address
      </button>
    </div>
  )
}

export default UserProfile
