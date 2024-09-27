function User({ isLoggedIn }) {
  console.log(isLoggedIn, "isLoggedIn")

  // conditional rendering using if Statements
  //   if (isLoggedIn) {
  //     return <h1>Welcome User!</h1>
  //   } else {
  //     return <h2>Please log in first.</h2>
  //   }

  // conditional rendering using the ternary operator
  return <h1>{isLoggedIn ? "Welcome User!" : "Please log in first."}</h1>
}

export default User
