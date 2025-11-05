// import { useEffect, useState } from "react"

import useFetchData from "../hooks/useFetchData"

// function PostsDetail(){
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => response.json())
//             .then(data => {
//                 setData(data)
//                 setLoading(false)
//             })
//             .catch(error => {
//                 setError(error.message)
//                 setLoading(false)
//             })
//     }, [])

//     if(loading) return <p>Loading...</p>
//     if(error) return <p>Error: {error}</p>

    // return <>
    //         <h1>Posts Detail</h1>
    //         {data.map(user => {
    //             return (
    //                 <div key={user.id}>
    //                     <p style={{fontSize: "20px", fontWeight: "bold"}}>{user.title}</p>
    //                     <p>{user.body}</p>
    //                 </div>
    //             )
    //         })}
    // </>
// }

// export default PostsDetail

// The same component but using the custom hook useFetchData

function PostsDetail(){
    const {data, loading, error} = useFetchData("https://jsonplaceholder.typicode.com/posts")

        if(loading) return <p>Loading...</p>
        if(error) return <p>Error: {error}</p>
        
        return <>
            <h1>Posts Detail</h1>
            {data.map(user => {
                return (
                    <div key={user.id}>
                        <p style={{fontSize: "20px", fontWeight: "bold"}}>{user.title}</p>
                        <p>{user.body}</p>
                    </div>
                )
            })}
    </>
}

export default PostsDetail