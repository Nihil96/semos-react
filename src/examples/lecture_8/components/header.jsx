import { useContext } from "react"
import Navbar from "./navbar"
import { UserContext } from "../context/userContext"
import { CounterContext } from "../context/counterContext"

function Header(){
     const {count} = useContext(CounterContext)
    // const {user} = useContext(UserContext)

    // console.log(user, "HEADER COMPONENT")
    return(
        <div>
            <h2>Simple Header Component</h2>
            <Navbar />
            {count}
        </div>
    )
}

export default Header