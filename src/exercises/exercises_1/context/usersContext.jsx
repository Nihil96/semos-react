import { createContext, useState } from "react";

const UserContext = createContext(null)

function UsersProvider({children}){
    const [users, setUsers] = useState([])

    const addUsers = (usersName) => setUsers([...users, usersName])

    return (
        <UserContext.Provider value={{users, addUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export { UsersProvider, UserContext }