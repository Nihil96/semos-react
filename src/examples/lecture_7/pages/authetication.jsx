import { Outlet } from "react-router-dom"

const Authetication = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>This is a simple Authetication page</h1>
      <Outlet />
    </div>
  )
}

export default Authetication
