import { createStore, combineReducers } from "redux"
import counterReducer from "./reducers/counterReducer"
import authReducer from "./reducers/authReducer"

// creating a store for one reducer
// export const store = createStore(counterReducer)

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
})

export const store = createStore(rootReducer)
