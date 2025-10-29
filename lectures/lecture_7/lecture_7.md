# Lecture 7: Introduction to React Router

![Alt Text](https://miro.medium.com/v2/resize:fit:1400/0*Zb9Uoad33rLb7v03.png "React Router")

## What is React Router?

React does not include a built-in routing system by default, so we need to install an additional library to handle routing functionality. `React Router` is an essential library for building single-page applications (SPAs) in React. It allows you to define routes in your application, manage navigation between different views, and even handle complex routing scenarios like nested routes and dynamic route parameters.

React Router is a powerful routing library for React that enables you to handle navigation in a declarative way. Unlike traditional multi-page websites where each URL corresponds to a different HTML file, SPAs use JavaScript to dynamically load content and update the URL without refreshing the entire page. React Router helps manage this by mapping URLs to specific components, ensuring a smooth user experience.

### Why Use React Router?

- Declarative Routing: React Router allows you to define routes in a clear, component-based way, making it easy to manage and understand the navigation structure of your application.
- Dynamic URL Matching: With React Router, you can create dynamic routes that match URLs with parameters, making your application more flexible.
- Nested Routing: React Router supports nested routes, enabling you to build complex layouts with multiple levels of navigation.

**Setting Up React Router**

To get started with React Router, you need to install it in your React application:
`npm install react-router-dom`

After installation, you can set up your routes in the src folder. Here’s an example of how to set up a basic routing structure:

**main.jsx** file

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

Import the `BrowserRouter` component from "react-router-dom" and wrap the `<App />` component.

### Creating Routes and Navigation

**Defining Routes**

In React Router, routes are defined using the `<Route>` component. Each route maps a URL path to a specific component. The path prop specifies the URL, and the element prop specifies the component to render when the route is active.

As addition to the previous step with the change that we made in the `main.jsx` file, now in the `<App />` component we can do something like this:

```jsx
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
```

**Adding Navigation**

To navigate between routes, React Router provides the `<Link>` component, which is similar to an anchor `<a>` tag but with added benefits like preventing full-page reloads.

**Example:**

```jsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
```

With `<Link>`, navigation is smooth and doesn't cause the page to reload, preserving the SPA nature of your React application.

**Example of bad navigation in React:**

```jsx
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {/* Example of bad navigation in React. Avoid using html 'a' tags and instead use the <Link /> component from the react-router-dom */}
      <button
        style={{ width: "100px", height: "100px" }}
        onClick={() => setCounter(counter + 1)}
      >
        Increment {counter}
      </button>
      {/* This will reload the whole application and the state will be lost. */}
      <a href="/">Reload Page</a>
    </div>
  )
}

export default App
```

### Nested Routes in React

Nested Routes in React allow you to define routes within other routes, creating a hierarchical structure for your application's navigation. This is useful for displaying different views or components based on the URL path while maintaining a consistent layout for the parent route.

**When to Use Nested Routes:**

- Hierarchical Content: When you have a main page that contains subpages or sections. For example, a dashboard with different tabs or a profile page with different settings and details.
- Consistent Layouts: To keep a consistent layout (e.g., sidebar, header) while changing the content based on the nested route.
- Complex Applications: When your application requires multiple levels of routing to organize and manage navigation effectively.
- Example Scenario: In an application with an Authentication section, you might have routes for Login and Signup that should be displayed within a common Authentication layout. This layout might include a header or sidebar specific to authentication-related tasks.

### `<Outlet />` Component

`<Outlet />` is a special component provided by React Router that acts as a placeholder for rendering nested routes. It renders the component that matches the nested route defined in the parent route.

**When to Use `<Outlet />` :**

- Render Child Routes: Use `<Outlet />` in a parent component to render child routes at a specific location within the parent component's layout.
- Consistent Layout: To maintain a consistent layout or structure while allowing different views or components to be rendered based on the nested route.

**Example:**

- Authentication.jsx:

```jsx
import { Outlet } from "react-router-dom"

function Authentication() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Authentication</h1>
      <p>This is a simple Authentication component.</p>
      {/* Render child routes here */}
      <Outlet />
    </div>
  )
}

export default Authentication
```

- App.js (route configuration for child routes under /auth):

```jsx
import { Routes, Route } from "react-router-dom"
import Authentication from "./Authentication"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

function App() {
  return (
    <div>
      {/* Other routes */}
      <Routes>
        <Route path="/auth" element={<Authentication />}>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
```

### Using the useNavigate Hook for Programmatic Navigation

The _useNavigate_ hook from React Router provides a more flexible way to programmatically navigate to different routes. It allows you to trigger navigation from within your components without relying on the `<Link>` component.

**Example:**

```jsx
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Simulate a fake login process
    setIsLoggedIn(true)

    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Login</h1>
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" style={{ marginTop: "20px" }}>
            Login
          </button>
        </form>
      )}
    </div>
  )
}
```

**Explanation:**

- Import: Import the useNavigate hook from react-router-dom.
- Hook Usage: Use the useNavigate hook to get a navigation function.
- Form Submission: In the handleSubmit function, handle the form submission logic and then call the navigate function to redirect the user to the / route.

**Additional Use Cases:**

1. Navigation from Events: Trigger navigation based on button clicks, key presses, or other events.
2. Dynamic Routing: Create dynamic routes based on user input or state changes.
3. Custom Navigation Logic: Implement custom navigation logic within your components.

**Advantages of useNavigate:**

- Flexibility: Provides more control over navigation compared to `<Link>`.
- Programmatic Navigation: Allows you to trigger navigation from within your components.
- Dynamic Routing: Can be used to create dynamic routes based on conditions or user input.

### Protected Route in React?

A Protected Route in React is a type of route that requires the user to meet certain conditions (like being authenticated) before they can access the content. If the user does not meet the required conditions, the route redirects them to a different page (such as a login page).

Access Control: Protected routes help restrict access to certain parts of an application.
Conditional Rendering: If the user is not authenticated, the route can render a different component, such as a login or error page.

User Experience: Ensures that only authorized users can access certain features or content, improving security and user experience.

**When to Use Protected Routes?**
You should use Protected Routes when you need to control access to certain parts of your application, such as:

- User Profiles: Only authenticated users should be able to view and edit their profile information.
- Admin Dashboards: Only users with specific roles (e.g., admin) should access administrative functions and data.
- Sensitive Content: Protect pages that contain sensitive or private information that shouldn't be publicly accessible.

### `<Navigate />` Component from react-router-dom

The `<Navigate />` component from react-router-dom is used to programmatically redirect users to a different route within a React application.

- Redirects: It allows you to navigate users from one route to another automatically.
- Conditional Navigation: Often used in protected routes to redirect unauthenticated users to a login page.
- Declarative: You define the destination route using the to prop, and the component handles the navigation.

**Example:**

```jsx
import { Navigate } from "react-router-dom"

// Inside a component
if (!isAuthenticated) {
  return <Navigate to="/login" />
}
```

### When to Use <Navigate />?

Use the `<Navigate />` component when you need to redirect users under certain conditions:

- After a Form Submission: Redirect users to a different page after successfully submitting a form.
- Authentication Checks: Redirect users to the login page if they are not authenticated and try to access a protected route.
- Custom Logic: Any other scenario where your application needs to automatically change the route based on certain logic or conditions.

### Dynamic Routes in React

Dynamic routes in React allow you to create routes that can handle changing or variable data in the URL. This is useful when you want to display specific content based on an identifier or a parameter, such as a user ID, product ID, or any other unique identifier.

For example, a dynamic route might look like /user/:id where :id is a placeholder for any user ID. When a user navigates to /user/123, the :id parameter will be replaced by 123, and you can use this information to fetch and display data specific to that user.

Dynamic routes are particularly useful for creating pages that display details of a specific item (like a user profile, product details, or blog post) without needing to define a separate route for each item.

### The `useParams` Hook

The useParams hook is a part of React Router as well. It allows you to access the dynamic parameters in the URL within your component. When you have a dynamic route like `/user/:id`, the `useParams` hook can be used to retrieve the value of `:id:`

```jsx
import { useParams } from "react-router-dom"

const User = () => {
  const { id } = useParams() // Extracts 'id' from the URL
  return <div>User ID: {id}</div>
}
```

In this example, if the user navigates to /user/123, `useParams` will return an object with { id: '123' }. You can then use this id to fetch data, display information, or perform any logic related to that specific parameter.

### Why Use Dynamic Routes and useParams?

- Reusability: Dynamic routes allow you to create a single route definition that can handle multiple variations (e.g., multiple user profiles or product pages).
- Flexibility: They provide a flexible way to display different content based on the URL parameters without hardcoding multiple routes.
- Ease of Data Fetching: By using useParams, you can easily fetch and display data specific to the dynamic parameter, improving the user experience with context-specific content.

### Catch-All Routes in React

Catch-All Routes are used to handle any route that does not match any of the defined routes in your React Router configuration. They are typically used to display a "404 Not Found" page or redirect users to a specific location when they access a non-existent route.

**How Catch-All Routes Work:**

Placement: Catch-All routes are defined using the wildcard `\*` character in the route path. They should be placed at the end of your route definitions to ensure they catch all unmatched routes.

Purpose: They provide a fallback route to handle invalid URLs or redirect users to a default page.

Example Usage: If you want to display a "Not Found" page for any route that isn't explicitly defined, you would add a catch-all route at the end of your route configuration.

**Example:**

```jsx
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Catch-All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
```

### Summary

In this lecture, we explored React Router, a critical library for building Single-Page Applications (SPAs) with React. React Router simplifies navigation and routing within an application by mapping different URLs to specific components, allowing for dynamic content updates without full page reloads. In the next lecture, we are going learn about Context API.

### Additional Resources

- <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">React Router</a>