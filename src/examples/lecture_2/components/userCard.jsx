
const UserCard = ({img, name, address }) => {
    
    return(
        <div>
            <img style={{width: "250px", height: "300px"}} src={img} alt="user img" />
            <p>Name: {name}</p>
            <span>Address: {address}</span>
        </div>
    )
}

export default UserCard