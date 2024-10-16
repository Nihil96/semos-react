import { useDispatch, useSelector } from "react-redux"
import {
  decrementCartItem,
  emptyCart,
  incrementCartItem,
  removeFromCart,
} from "../actions/cartActions"

function Cart() {
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()

  const totalCostOfProducts = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none" }}>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name} - {cartItem.price} x {cartItem.quantity}
                <button
                  onClick={() => dispatch(incrementCartItem(cartItem.id))}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decrementCartItem(cartItem.id))}
                >
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total: {totalCostOfProducts}</p>
          <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart
