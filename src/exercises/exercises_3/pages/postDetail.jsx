import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PostDetail() {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id])

  if (!post) return <p>Loading...</p>

  return (
    <div>
      <h1>Post Details</h1>
      <h2>ID: {post.id}</h2>
      <h3>Title: {post.title}</h3>
      <p>Body: {post.body}</p>
    </div>
  )
}

export default PostDetail
