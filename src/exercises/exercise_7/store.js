import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import weatherReducer from "./reducers/weatherReducer"

// Combine Reducers (you can add more reducers if needed)
const rootReducer = combineReducers({
  weather: weatherReducer,
})

// Create Store with Redux Thunk middleware
export const store = createStore(rootReducer, applyMiddleware(thunk))
