import { useContext, useState } from "react"
import { UserContext } from "../context/usersContext"


function UsersManagement(){
    const {users, addUsers} = useContext(UserContext)
    const [userName, setUserName] = useState("")
    
    const handleAddUser = () => {
        if(userName.trim() !== ""){
            addUsers(userName)
            setUserName("")
        }
    }

    return (
        <div>
            <h1>Users Management</h1>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter user name" />
            <button onClick={handleAddUser}>Add User</button>
            <ul>
                {users.length > 0 ? users.map((user, index) => <li key={index}>{user}</li>) : "Add some users to the list"}
            </ul>
        </div>
    )
}

export default UsersManagement