import useFetchData from "../hooks/useFetchData"

function PostsDetail() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Posts Data:</h1>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PostsDetail
