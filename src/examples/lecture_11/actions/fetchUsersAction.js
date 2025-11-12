// action types
export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

// actions creators
export const fetchUsersRequest = () => ({
    type: FETCH_USERS
})

export const fetchUsersSuccess = (users) =>({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (error) =>({
    type: FETCH_USERS_FAILURE,
    payload: error
})

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                dispatch(fetchUsersSuccess(data))
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}