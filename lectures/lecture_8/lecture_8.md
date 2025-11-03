# Lecture 8: Context API and useContext Hook

![Alt Text](https://miro.medium.com/v2/resize:fit:800/1*fwbmNnQsCnvDpZO54H0jsw.png "React Context API")

## Introduction to Context API

In this lecture, we will explore the Context API in React and how it can be used to manage state more effectively in your applications. We'll discuss the concept of prop drilling and how the Context API can help avoid it, walk through creating and consuming context providers, and learn how the useContext hook simplifies state management in React. We'll also cover practical examples to help solidify your understanding of these concepts.

### Understanding Prop Drilling

**Prop Drilling** occurs when you pass data through many levels of nested components just to reach the deeply nested component that needs it. This can make your code harder to maintain and understand, especially in large applications.

**Example of Prop Drilling:**

Imagine a scenario where you have a deeply nested component tree, and a piece of state needs to be shared between a parent component and a deeply nested child.

```jsx
function App() {
  const [user, setUser] = useState({ name: "John Doe", age: 30 })

  return (
    <div>
      <Header user={user} />
    </div>
  )
}

function Header({ user }) {
  return (
    <div>
      <NavBar user={user} />
    </div>
  )
}

function NavBar({ user }) {
  return (
    <div>
      <UserProfile user={user} />
    </div>
  )
}

function UserProfile({ user }) {
  return <div>User Name: {user.name}</div>
}
```

In this example, the user state is passed down through the `Header` and `NavBar` components just to be used in `UserProfile`. This is a classic case of prop drilling, and it can become cumbersome as the application grows.

### What is Context API?

The Context API is a way to create global variables that can be passed around in a React app without the need for prop drilling. It provides a way to share values between components without explicitly passing props through every level of the tree.

**When to Use Context:**

- When data needs to be accessible by many components at different nesting levels.
- When you want to avoid prop drilling for certain pieces of state.
- When multiple components need to react to the same data changes.

**How Context API Works**

The Context API consists of two primary components:

- Context Provider: Provides the context value to its child components.
- Context Consumer: Consumes the context value provided by the nearest provider.

## 3. Creating and Consuming Context Providers

### Step-by-Step Guide to Using Context API

1. Create a Context:

```jsx
import React, { createContext, useState } from "react"

// Creating a UserContext
const UserContext = createContext(null)

export default UserContext
```

2. Create a Context Provider Component:

The provider component will use the UserContext.Provider to pass the current context value to the children.

```jsx
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "John Doe", age: 30 })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
```

- Wrap Your Application with the Provider:
- Wrap your application or a part of your component tree where the context is needed with the provider.

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
```

3. Consuming Context in Components:

- You can consume the context in any component using the Context Consumer or the useContext hook.
- The useContext hook provides a simpler way to access the context value in functional components

```jsx
import React, { useContext } from "react"
import UserContext from "./UserContext"

function UserProfile() {
  const { user } = useContext(UserContext)

  return <div>User Name: {user.name}</div>
}

export default UserProfile
```

4. Updating Context Value

You can also update the context value using functions passed through the context.

```jsx
function UpdateProfile() {
  const { user, setUser } = useContext(UserContext)

  const updateName = () => {
    setUser({ ...user, name: "Jane Doe" })
  }

  return <button onClick={updateName}>Change Name</button>
}
```

The Context API in React is a powerful tool for managing state across your application without the hassle of prop drilling. It's especially useful in medium to large applications where you have multiple components needing access to a shared state. The useContext hook further simplifies consuming context, making state management more efficient and code more readable.

### Common Use Cases for the Context API

The Context API is versatile and can be used in various scenarios where managing state and sharing data across multiple components is necessary. Here are some common use cases:

- Authentication: Store user authentication information (token, user details) in the context.
- Theme Management: Manage application themes (dark mode, light mode) globally.
- Language Localization: Store the current language and localization data in the context.

### Before using Context

Context is very tempting to use! However, this also means it’s too easy to overuse it. Just because you need to pass some props several levels deep doesn’t mean you should put that information into context. You should consider this first, before using Context:

- **Prefer props first:** Even if passing many props feels tedious, it keeps data flow explicit and helps with maintainability.

- **Refactor with children:** If data is passed through multiple components that don’t use it, extract reusable components and pass JSX as children. For example, instead of <Layout posts={posts} />, use <Layout><Posts posts={posts} /></Layout> to simplify the hierarchy.

### Summary

In this lecture, we explored the React Context API, a powerful solution for managing state across applications without the challenges of prop drilling. We began by defining prop drilling and illustrating its drawbacks in complex component hierarchies. The Context API allows for the creation of global variables that can be accessed by deeply nested components, streamlining state management.

### Additional Resources

- <a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank" rel="noopener noreferrer">Passing Data With Context</a>