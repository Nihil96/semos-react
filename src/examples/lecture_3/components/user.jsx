
function User({isLoggedIn}){
    // ------ conditional rendering using if statements ------
    // if(isLoggedIn){
    //     return <h1>Welcome User!</h1>
    // } else {
    //     return <h1>Please log in first.</h1>
    // }

    // ------- using ternary operator -------
    // return <h1>{isLoggedIn ? "Welcome User!" : "Please log in first."}</h1>

    // -------- using Logical && operator -------
    return (
        <>
        {isLoggedIn && <h1>Welcome User!</h1>}
        {!isLoggedIn && <h1>Please log in first.</h1>}
        </>
    )

}

export default User