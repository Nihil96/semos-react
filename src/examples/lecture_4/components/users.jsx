import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => setUsers(data))
    }, [])


    return (
        <>
        <h1>List of users</h1>
        {users.length > 0 ? (
            users.map((user) => {
                return (
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>
                )
            })
        ) : (
            <p>Users not found</p>
        )}
        </>
    )
}

export default Users