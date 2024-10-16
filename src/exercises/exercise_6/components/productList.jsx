import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"

function ProductList() {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Product List</h2>

      <ul style={{ listStyleType: "none" }}>
        {products?.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
