import { useDispatch, useSelector } from "react-redux"
import { addToCard } from "../actions/cartActions"

function ProductList(){
    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()

    console.log(products)
    return (
        <>
            <h2> Products</h2>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            {product.name} - {product.price}
                            <button onClick={() => dispatch(addToCard(product))}>Add To Cart</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ProductList