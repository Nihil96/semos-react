import useCounter from "../hooks/useCounter"
import useFetchData from "../hooks/useFetchData"

function UsersDetail() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Users Data:</h1>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
          </div>
        )
      })}
    </div>
  )
}

export default UsersDetail
