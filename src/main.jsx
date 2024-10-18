import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
// import { store } from "./examples/lecture_10/store.js"
// import { store } from "../src/exercises/exercise_6/store.js"
import { store } from "../src/examples/lecture_11/store.js"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
