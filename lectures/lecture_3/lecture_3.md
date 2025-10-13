# Lecture 3: Understanding State

![Alt Text](https://blog.solguruz.com/wp-content/uploads/2023/11/Understanding-State-Management-in-React-From-Confusion-to-Clarity.png "What is State in React?")

## Introduction to State

In React, components can manage and exchange data through two primary mechanisms: **state** and **props**. Understanding how these work is crucial since our goal is to build dynamic and interactive applications.

### What is State?

State is a built-in object that allows components to create and manage their own local data. Unlike props, the state is mutable and can be changed over time, usually as a result of user actions or network responses.

**Example of Using State**

Class Component (Counter.jsx)

```jsx
import React, { Component } from "react"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter
```

**Explanation:**

-   Initializing State: The state is initialized in the constructor.
-   Updating State: The increment method updates the state using this.setState.
-   Rendering State: The current state is accessed via this.state and displayed in the render method.

### Passing Data with Props

As we saw in the previous lecture, `Props` are the primary way to pass data between components. This enables component reusability and a clear data flow from parent to child components.

**Example: Parent to Child Data Flow**

Parent Component (App.jsx)

```jsx
import React from "react"
import Profile from "./Profile"

function App() {
    const user = {
        name: "John Doe",
        age: 28,
        location: "New York",
    }

    return (
        <div className="App">
            <Profile user={user} />
        </div>
    )
}

export default App
```

**Child Component (Profile.jsx)**

```jsx
import React from "react"

function Profile(props) {
    return (
        <div>
            <h2>{props.user.name}</h2>
            <p>Age: {props.user.age}</p>
            <p>Location: {props.user.location}</p>
        </div>
    )
}

export default Profile
```

**Explanation:**

-   Object as Props: The App component passes a user object as a prop to the Profile component.
-   Accessing Object Props: The Profile component accesses the user object and displays its properties.

### Managing State in Components

State management is crucial for creating interactive applications. React provides several ways to manage state, including class-based state management and hooks in functional components.

#### Managing State with Hooks

Here is the same implementation from above, but with functional component:

```jsx
import React, { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter
```

**Explanation:**

-   useState Hook: The useState hook initializes the count state and provides a setCount function to update it.
-   Updating State: The increment function updates the state using setCount.
-   Rendering State: The current state is displayed in the JSX.

As you can notice, with functional components we have:

-   more concise syntax
-   the components are smaller which makes them easier for reading
-   cleaner code

### Passing Functions as Props

In React, functions can be passed from parent to child components as props. This allows the parent to control the behavior of the child component, enabling more complex interactions and better modularity.

This is a common scenario in React when a child component needs to update the state of its parent component. To achieve this, the parent passes a function as a prop to the child. The child then calls this function to trigger state updates in the parent.

Example 1.

```jsx
// Parent Component (App.jsx)
import React from "react"
import Greeting from "./Greeting"

function App() {
  const greet = (name) => {
    alert(`Hello, ${name}!`)
  }

  return (
    <div>
      <Greeting name="John" greet={greet} />
    </div>
  )
}

export default App

// Child Component (Greeting.jsx)
import React from "react"

function Greeting({ name, greet }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => greet(name)}>Greet</button>
    </div>
  )
}

export default Greeting
```

**Explanation:**

-   The greet function in the App component is passed as a prop to the Greeting component.
-   In the Greeting component, this function is called when the button is clicked, triggering an alert with the name of the person.
-   This enables reusable components where specific actions or behaviors can be controlled by the parent component.

**Example 2.**

```jsx
// Parent Component (App.jsx)
import React, { useState } from "react"
import Child from "./Child"

function App() {
  const [message, setMessage] = useState("No message yet")

  const updateMessage = (newMessage) => {
    setMessage(newMessage)
  }

  return (
    <div>
      <h1>Message: {message}</h1>
      <Child updateMessage={updateMessage} />
    </div>
  )
}

export default App

// Child Component (Child.jsx)
import React, { useState } from "react"

function Child({ updateMessage }) {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => updateMessage(input)}>Update Message</button>
    </div>
  )
}

export default Child
```

-   This pattern allows for two-way communication between components, where the child can send data back to the parent.
-   It keeps the parent in control of state while allowing child components to trigger updates.

**Example 3.**

```jsx
// Parent component
function ParentComponent() {
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        age: 30,
        location: "New York",
    })

    const updateUserInfo = (newInfo) => {
        // Copy the existing state and update with new info
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            ...newInfo,
        }))
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>Location: {userInfo.location}</p>
            <ChildComponent
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
            />
        </div>
    )
}
```

```jsx
// Child component
function ChildComponent({ userInfo, updateUserInfo }) {
    const changeLocation = () => {
        updateUserInfo({ location: "San Francisco" })
    }

    return (
        <div>
            <h2>Child Component</h2>
            <p>Received Name: {userInfo.name}</p>
            <p>Received Age: {userInfo.age}</p>
            <p>Received Location: {userInfo.location}</p>
            <button onClick={changeLocation}>
                Change Location to San Francisco
            </button>
        </div>
    )
}

ChildComponent.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        location: PropTypes.string,
    }).isRequired,
    updateUserInfo: PropTypes.func.isRequired,
}
```

**Explanation:**

1. Parent Component:

-   Holds an object userInfo in its state, containing properties like name, age, and location.
-   Passes the userInfo object and a function updateUserInfo to the child component.

2. Child Component:

-   Receives the userInfo and updateUserInfo function through props.
-   When the "Move to San Francisco" button is clicked, the child calls the updateUserInfo function, passing an updated location to modify the parent’s state.

### Important!

When working with reference data types in React

In React, we need to copy the object before updating it to ensure that we respect the principle of immutability. React's state should always be treated as immutable, meaning we should never directly modify the existing state. Instead, we create a new copy of the state with the necessary changes and then update the state with that new copy.

**Why is this important?**

-   Efficient Re-rendering: React uses shallow comparison to determine whether a component should re-render. If you directly mutate the state, React might not detect the changes because the reference to the object in memory stays the same. By copying the object, we create a new reference, which React can easily detect, triggering a re-render as needed.

-   State Consistency: Directly mutating state can lead to unpredictable behavior, especially in larger applications where multiple components depend on the state. Creating copies ensures that other components that rely on the old state won’t be unexpectedly affected.

## Conditional Rendering in React

Conditional rendering in React allows you to display different UI elements based on certain conditions. This is a fundamental concept that enhances the interactivity and user experience of your application. You can use JavaScript logical operators like if, ternary, or even short-circuit evaluation to achieve this.

**Example 1: Using if Statements**

```jsx
// Component (UserGreeting.jsx)
import React from "react"

function UserGreeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>
    }
    return <h1>Please log in.</h1>
}

export default UserGreeting
```

**Explanation:**

-   In this example, the UserGreeting component checks the isLoggedIn prop.
-   If isLoggedIn is true, it renders a welcome message; otherwise, it prompts the user to log in.

**Example 2: Using Ternary Operator**

```jsx
// Component (TernaryGreeting.jsx)
import React from "react"

function TernaryGreeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
}

export default TernaryGreeting
```

**Explanation:**

-   The same logic is applied using a ternary operator.
-   This method is more concise and often preferred for simple conditions.

**Example 3: Logical && Operator**

```jsx
// Component (Notification.jsx)
import React from "react"

function Notification({ message }) {
    return <div>{message && <p>You have a new message: {message}</p>}</div>
}

export default Notification
```

### Summary

In this lecture, we've covered the fundamental concepts of state and props in React. We've learned how to pass data between components using props, manage local state within components and how to conditionaly render components. These concepts will help you to properly architecture the components for your application.

### Additional Resources

-   <a href="https://react.dev/learn/state-a-components-memory" target="_blank" rel="noopener noreferrer">State: A components memory</a>
-   <a href="https://react.dev/learn/conditional-rendering" target="_blank" rel="noopener noreferrer">Conditional Rendering</a>