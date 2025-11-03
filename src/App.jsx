import { useState } from "react";
import "./App.css";
import Header from "./examples/lecture_8/components/header";
import UserProvider from "./examples/lecture_8/context/userContext";
import Navbar from "./examples/lecture_8/components/navbar";
import ParentCounter from "./examples/lecture_8/components/parentCounter";
import CounterProvider from "./examples/lecture_8/context/counterContext";

function App() {
  // const [user] = useState({name: "Michael", age: 30})

  return (
    <>
    {/* Example 1 */}
    {/* <Header user={user} /> */} 
    <UserProvider>
      <Header />
    </UserProvider>

    {/* Example 2 */}
    <CounterProvider>
      <ParentCounter />
    </CounterProvider>
    </>
  );
}

export default App;
