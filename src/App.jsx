import { Route, Routes } from "react-router-dom"
import "./App.css"
import PostsList from "./exercises/exercises_3/pages/postsList"
import PostDetail from "./exercises/exercises_3/pages/postDetail"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App
