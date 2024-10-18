import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../actions/fetchUsersActions"

const initialState = {
  users: [],
  loading: false,
  error: "",
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true }
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" }
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, users: [], error: action.payload }
    default:
      return state
  }
}

export default usersReducer
