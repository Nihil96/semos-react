import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "../actions/fetchusersAction"

const initialState = {
    users: [],
    error: "",
    loading: false
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {...state, loading: true }
        case FETCH_USERS_SUCCESS: 
            return {...state, loading: false, users: action.payload, error: ""}
        case FETCH_USERS_FAILURE:
            return {
                ...state, loading: false, error: action.payload, users: []
            }
        default:
            return state
    }
}

export default usersReducer