import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../actions/fetchusersAction"
import { useEffect } from "react"

const UsersList = () => {
    const {users, loading, error} = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return(
        <>
        <h1>Users List</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: "red", fontWeight: "bold", fontSize: "36px"}}>{error}</p>}
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
        </>
    )
}

export default UsersList