import { useState } from "react";
import ChildComponent from "./child";

function Parent() {
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        age: 20,
        location: "New York"
    })

    const changeUserInfo = (newInfo) => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            ...newInfo
        }))
    }

    return (
        <>
        <h2>Parent Component</h2>
        <p>Name: {userInfo.name}</p>
        {userInfo.surname ? <p>Surname: {userInfo.surname}</p> : null}
        <p>Age: {userInfo.age}</p>
        <p>Location: {userInfo.location}</p>
        <ChildComponent changeUserInfo={changeUserInfo} />
        </>
    )
}

export default Parent