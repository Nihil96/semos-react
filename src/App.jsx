import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./examples/lecture_7/pages/home";
import About from "./examples/lecture_7/pages/about";
import Contact from "./examples/lecture_7/pages/contact";
import Navbar from "./examples/lecture_7/components/navbar";
import Authetication from "./examples/lecture_7/pages/authetication";
import SignIn from "./examples/lecture_7/pages/signIn";
import SignUp from "./examples/lecture_7/pages/signUp";
import ProtectedRoute from "./examples/lecture_7/components/protectedRoute";
import { useState } from "react";
import Profile from "./examples/lecture_7/pages/profile";
import User from "./examples/lecture_7/pages/user";
import NotFound from "./examples/lecture_7/pages/notFound";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <>
    <Navbar />
    <Routes>
      {/* Basic Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Nested Routes */}
      <Route path="/auth" element={<Authetication />}>
        {/* Child Routes */}
        <Route path="signin" element={<SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      {/* Protected Route */}
      <Route path="/profile" element={<ProtectedRoute isAutheticated={isSignedIn} element={<Profile />} />} />
      {/* Dynamic Route */}
      <Route path="user/:id" element={<User />} />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
