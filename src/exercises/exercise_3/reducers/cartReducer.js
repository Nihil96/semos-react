import { ADD_TO_CART, EMPTY_CART, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState = {
    products: [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 1.2 },
    { id: 4, name: "Grapes", price: 2.5 },
    { id: 5, name: "Mango", price: 3 },
    { id: 6, name: "Pineapple", price: 4 },
  ],
  cartItems: []
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            const existingProduct = state.cartItems.find(item => item.id === action.payload.id)

            if(existingProduct){ 
                return {...state, cartItems: state.cartItems.map(item => {
                    item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                })}
            }

            return {...state, cartItems: [...state.cartItems, {...action.payload, quantity: 1}]}

        }
        case REMOVE_FROM_CART: {
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}
        }

        case INCREMENT_ITEM: {
            return {...state, cartItems: state.cartItems.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)}
        }

        case DECREMENT_ITEM: {
            return {...state, cartItems: state.cartItems.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)}
        }

        case EMPTY_CART: {
            return {
                ...state, cartItems: []
            }
        }

        default:
            return state
    }
}

export default cartReducer