import "./App.css";
import PostsDetail from "./examples/lecture_9/components/postsDetail";
import UsersDetail from "./examples/lecture_9/components/usersDetail";
import { calculateAverage } from "./examples/lecture_9/helpers/calculateAverage";
import { useAverage } from "./examples/lecture_9/hooks/useAverage";
import useCounter from "./examples/lecture_9/hooks/useCounter";

function App() {
  const {counter, increment} = useCounter(100)
  const average = useAverage([1,2,3,4,5])
  const averageNumber = calculateAverage([1,2,3,4,5])

  return (
    <>
    {/* Example 1 */}
      {/* <PostsDetail />
      <UsersDetail /> */}

      {/* Example 2 */}
      {/* <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button> */}

       {/* Example 3 */}
       <h2>Average: {average}</h2> {/* result from the custom hook */}
       <h2>Average: {averageNumber}</h2> {/* result from the helper function */}
    </>
  );
}

export default App;
