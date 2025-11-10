import { combineReducers, createStore } from "redux"
import counterReducer from "./reducers/counterReducer"
import authReducer from "./reducers/authReducer"
import cartReducer from "../../exercises/exercise_3/reducers/cartReducer"

// creating a store for one reducer
// export const store = createStore(counterReducer)

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer)