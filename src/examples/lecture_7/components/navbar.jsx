import { Link, NavLink } from "react-router-dom"

function Navbar(){
    const linkStyle = {textDecoration: "none"}

    const activeLinkStyle = {
        fontWeight: "bold",
        color: "blue",
        textDecoration: "none"
    }

    return(
        <nav style={{
            backgroundColor: "#f9f9f9",
            width: "100vw",
            height: "50px",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: "0",
            top: "0"
        }}>
            <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
                <li>
                    <NavLink style={({isActive}) => (isActive ? activeLinkStyle : linkStyle)} to="/">Home</NavLink>
                </li>
                <li>
                    <Link style={linkStyle} to="/about">About</Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/auth">Authentication</Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/auth/signin">SignIn</Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/auth/signup">SignUp</Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar