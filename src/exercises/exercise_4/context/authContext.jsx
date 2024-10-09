import { createContext, useState } from "react"

const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [isAutheticated, setIsAutheticated] = useState(() => {
    const savedAuthData = localStorage.getItem("isAutheticated")
    return savedAuthData ? JSON.parse(savedAuthData) : false
  })

  const login = (rememberMe) => {
    setIsAutheticated(true)
    if (rememberMe) {
      localStorage.setItem("isAutheticated", true)
    }
  }

  const logout = () => {
    setIsAutheticated(false)
    localStorage.removeItem("isAutheticated")
  }

  return (
    <AuthContext.Provider value={{ isAutheticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
