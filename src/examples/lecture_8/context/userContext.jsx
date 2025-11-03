import {useState, createContext} from "react"

export const UserContext = createContext(null)

function UserProvider({children}){
    const [user, setUser] = useState({name: "Michael", age: 30})

    const updateName = (newName) => {
        setUser({...user, name: newName})
    }

    const addAddress = (address) => {
        setUser({...user, address})
    }

    return (
        <UserContext.Provider value={{user, updateName, addAddress}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider