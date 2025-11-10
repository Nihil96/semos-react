import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/authActions"

const initialState = {
    isAutheticated: false
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case AUTH_LOGIN:
            return {...state, isAutheticated: true}
        case AUTH_LOGOUT:
            return {...state, isAutheticated: false}
        default:
            return state
    }

}

export default authReducer