import { useParams } from "react-router-dom"

function User(){
    const { id } = useParams()

    return (
        <div>
            <h1>User Profile Page</h1>
            <p>You are viewing the profile of user with ID: <strong>{id}</strong></p>
        </div>
    )
}

export default User