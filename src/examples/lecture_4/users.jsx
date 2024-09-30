import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  console.log(users)
  return (
    <div style={{}}>
      <h1>List of users</h1>
      {users.length > 0 &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Users
