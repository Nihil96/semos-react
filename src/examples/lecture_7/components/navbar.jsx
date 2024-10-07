import { Link, NavLink } from "react-router-dom"

function Navbar() {
  const linkStyle = { textDecoration: "none" }
  const activeLinkStyle = {
    fontWeight: "bold",
    color: "blue",
    textDecoration: "none",
  }

  return (
    <nav
      style={{
        backgroundColor: "#f9f9f9",
        width: "100vw",
        height: "50px",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        left: "0",
        top: "0",
      }}
    >
      <ul style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/auth">
            Authetication
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/auth/signin">
            Sign In
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/auth/signup">
            Sign Up
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
