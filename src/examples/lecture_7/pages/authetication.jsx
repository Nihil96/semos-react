import { Outlet } from "react-router-dom"

function Authetication(){
    return (
        <div>
            <h1>Welcome to the Authetication Page</h1>
            <Outlet />
        </div>
    )
}

export default Authetication