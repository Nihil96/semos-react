import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../actions/fetchUsersActions"

function UsersList() {
  const { users, loading, error } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h1>Users List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
