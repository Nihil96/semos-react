import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  console.log(posts)
  return (
    <div>
      <h1>Posts List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((post) => {
          return (
            <div
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadis: "4px",
                width: "200px",
              }}
              key={post.id}
            >
              <h3>{post.title}</h3>
              <p>ID: {post.id}</p>
              <Link to={`post/${post.id}`}>View Details</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostsList
