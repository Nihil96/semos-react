export const AUTH_LOGIN = "LOGIN"
export const AUTH_LOGOUT = "LOGOUT"

export const login = () => ({
  type: AUTH_LOGIN,
})

export const logout = () => ({
  type: AUTH_LOGOUT,
})
