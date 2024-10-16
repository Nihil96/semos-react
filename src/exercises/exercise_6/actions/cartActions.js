// action types
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const INCREMENT_CART_ITEM = "INCREMENT_CART_ITEM"
export const DECREMENT_CART_ITEM = "DECREMENT_CART_ITEM"
export const EMPTY_CART = "EMPTY_CART"

// action creators
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product })

export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id })

export const incrementCartItem = (id) => ({
  type: INCREMENT_CART_ITEM,
  payload: id,
})

export const decrementCartItem = (id) => ({
  type: DECREMENT_CART_ITEM,
  payload: id,
})

export const emptyCart = () => ({ type: EMPTY_CART })
