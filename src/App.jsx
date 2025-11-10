import "./App.css";
import Auth from "./examples/lecture_10/components/auth";
import Counter from "./examples/lecture_10/components/counter";
import Cart from "./exercises/exercise_3/components/cart";
import ProductList from "./exercises/exercise_3/components/productList";

function App() {

  return (
    <>
    {/* Example 1 */}
    {/* <Counter />
    <Auth /> */}

    {/* Exercise 3 */}
    <h1>Shoping Cart With Redux</h1>
    <ProductList />
    <Cart />
    </>
  );
}

export default App;
