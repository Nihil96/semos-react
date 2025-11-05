import useFetchData from "../hooks/useFetchData"

function UsersDetail(){
    const {data, loading, error} = useFetchData("https://jsonplaceholder.typicode.com/users")

        if(loading) return <p>Loading...</p>
        if(error) return <p>Error: {error}</p>
        
        return <>
            <h1>Users Detail</h1>
            {data.map(user => {
                return (
                    <div key={user.id}>
                        <p style={{fontSize: "20px", fontWeight: "bold"}}>{user.name}</p>
                        <p>{user.username}</p>
                    </div>
                )
            })}
    </>
}

export default UsersDetail