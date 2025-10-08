# Lecture 2: Components Basics

![Alt Text](https://miro.medium.com/v2/resize:fit:875/0*cD8BQDdSA1mcAWNX.png "React Components Basics")

## What are Components?

In React, components are the building blocks of the user interface. They encapsulate parts of the UI into reusable, independent pieces that can be composed together.

### Definition of a Component

A **component** in React is a JavaScript function or class that optionally accepts inputs (known as "props") and returns a React element that describes how a section of the UI should appear.

### Types of Components

1. **Functional Components**: Simple functions that return JSX.
2. **Class-based Components**: ES6 classes that extend `React.Component`.

### What is a Class-based Component?

Class-based components are one of the original methods for creating components in React. They use ES6 class syntax and extend from `React.Component`. These components have access to lifecycle methods, state, and more.

**Here is a simple example of a Class-based Component**

```jsx
import React, { Component } from "react"

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default Greeting
```

**Explanation**

`import React, { Component } from 'react';`

This line imports the necessary React library and the Component class from React.

`class Greeting extends Component {`

Here, we define a class Greeting that extends React.Component.

```jsx
render() {
  return (
    <div>
      <h1>Hello, {this.state.name}!</h1>
    </div>
  );
}

```

The render method returns the JSX that defines the component's UI.

`export default Greeting; `

This line exports the Greeting component so it can be imported and used in other parts of the application.

### React Class Component Lifecycle

React class components go through a series of phases from creation to destruction, known as the component lifecycle. These phases include mounting, updating, and unmounting.

**1. componentDidMount**

Phase: **Mounting**

The `componentDidMount` method is called once, immediately after the component is added to the DOM. It's a good place to initiate API calls, set up subscriptions, or perform other side effects.

Example 1

```jsx
import React, { Component } from "react"

class SimpleComponent extends Component {
    // This method is called once, after the component is mounted.
    componentDidMount() {
        console.log("Component has mounted!")
    }

    render() {
        console.log("Rendering component...")
        return (
            <div>
                <h1>Hello, this is a simple React class component!</h1>
            </div>
        )
    }
}

export default SimpleComponent
```

**Explanation:**

-   The componentDidMount method runs once after the component has been inserted into the DOM. Here, we use it to log a message ('Component has mounted!') to the console.
-   The render method is called during the initial mounting as well, which is why it also logs the message 'Rendering component...'.
-   When you run this code, you'll see the following output in the console:

```plaintext
Rendering component...
Component has mounted!
```

Example 2

```jsx
import React, { Component } from "react"

class DataFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => this.setState({ data }))
    }

    render() {
        return (
            <div>
                {this.state.data ? <p>{this.state.data}</p> : <p>Loading...</p>}
            </div>
        )
    }
}

export default DataFetcher
```

**2. componentDidUpdate**

Phase: **Updating**

The componentDidUpdate method is called immediately after updating occurs. It's a good place to operate on the DOM when the component has been updated, or to perform additional data fetching based on the component's props or state.

Example

```jsx
import React, { Component } from "react"

class SimpleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    // This method is called after the component updates (e.g., when state or props change).
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update!")
        console.log("Previous state:", prevState)
        console.log("Current state:", this.state)
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment Count</button>
            </div>
        )
    }
}

export default SimpleComponent
```

**Explanation:**

-   The componentDidUpdate method runs after the component's state or props are updated. In this example, whenever you click the "Increment Count" button, the state changes, triggering the componentDidUpdate method.
-   Inside componentDidUpdate, we log the message 'Component did update!', the previous state (prevState), and the current state (this.state) to the console.
-   When you run the code and click the button to increment the count, you'll see output similar to this in the console:

```plaintext
Component did update!
Previous state: {count: 0}
Current state: {count: 1}

Component did update!
Previous state: {count: 1}
Current state: {count: 2}
```

**3. componentWillUnmount**

Phase: **Unmounting**

The componentWillUnmount method is called immediately before a component is removed from the DOM. It's the place to clean up any subscriptions, timers, or other resources to prevent memory leaks.

Example:

```jsx
import React, { Component } from "react"

class Timer extends Component {
    componentDidMount() {
        console.log("Timer component mounted")
    }

    // This method is called right before the component is removed from the DOM.
    componentWillUnmount() {
        console.log("Timer component will unmount")
    }

    render() {
        return (
            <div>
                <h1>Timer is active</h1>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTimer: true,
        }
    }

    toggleTimer = () => {
        this.setState((prevState) => ({
            showTimer: !prevState.showTimer,
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleTimer}>
                    {this.state.showTimer ? "Hide Timer" : "Show Timer"}
                </button>
                {this.state.showTimer && <Timer />}
            </div>
        )
    }
}

export default App
```

**Explanation:**

-   The Timer component has a componentWillUnmount method that logs 'Timer component will unmount' right before the component is removed from the DOM.
-   The App component toggles the display of the Timer component when you click the button.
-   When the Timer component is unmounted (i.e., when you click "Hide Timer"), the componentWillUnmount method will run, logging the unmount event.
-   When you run the code and click "Hide Timer," you'll see:

```plaintext
Timer component mounted
Timer component will unmount
```

Understanding the lifecycle methods of class-based components in React is crucial for managing side effects, optimizing performance, and preventing memory leaks. By effectively using these lifecycle methods, you can ensure your React components are efficient and maintainable.

## Functional Components

### What is a Functional Component?

Functional components are simpler and more concise. They are plain JavaScript functions that return JSX. With the introduction of Hooks in React 16.8, functional components can now manage state and side effects.

```jsx
import React from "react"

function Greeting() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default Greeting
```

In the previous lecture we have already discussed and explained what is functional component so we will skip the explanation here since it is a very basic example.

Functional components don’t have the same explicit lifecycle methods as class components, but they can manage lifecycle events through React Hooks, like `useEffect`. While class components use methods like `componentDidMount`, `componentDidUpdat`, and `componentWillUnmount`, functional components use `useEffect` to handle these phases. We are going to explain this in more details in the upcoming lectures.

## Which One Should You Use?

### Advantages of Functional Components

-   Simpler Syntax: Functional components are easier to read and write due to their simpler syntax.
-   Performance: Functional components can be more performant because they don't have the overhead of class inheritance.
-   Hooks: With the introduction of Hooks, functional components can now handle state and lifecycle methods, making them just as powerful as class-based components.
-   Less Boilerplate: Functional components reduce the amount of boilerplate code compared to class-based components.

### Why Functional Components are Preferred

Functional components have become the preferred way to write React components because of their simplicity, improved readability, and the power of Hooks. Hooks allow functional components to manage state, side effects, and other features that were previously only possible in class-based components.

### Other Points to Consider

-   Legacy Code: If you're working on an existing codebase that uses class-based components, you may need to continue using them for consistency.
-   Learning Curve: Beginners might find functional components easier to learn due to their simpler syntax.
-   Community and Ecosystem: The React community is increasingly favoring functional components, and most new libraries and tools are designed with functional components in mind.

## What are Props?

Props (short for properties) are read-only attributes passed from parent components to child components. They enable components to receive dynamic data and behavior.

**Example:**

```jsx
// Parent Component (App.jsx)
import React from "react"
import Greeting from "./Greeting"

function App() {
    const userName = "Alice"

    return (
        <div className="App">
            <Greeting name={userName} />
        </div>
    )
}

export default App
```

```jsx
// Functional Child Component (Greeting.jsx)
import React from "react"

function Greeting(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
        </div>
    )
}

export default Greeting
```

```jsx
// Class Child Component (Greeting.jsx)
import React, { Component } from "react"

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
            </div>
        )
    }
}

export default Greeting
```

**Explanation:**

-   Passing Props: The App component passes the userName variable as a name prop to the Greeting component.
-   Accessing Props: The Greeting component accesses the name prop and displays it.

## What Are PropTypes?

In React, PropTypes are a way to enforce type-checking on the props passed to components. They ensure that the correct data types are passed as props, helping catch bugs and providing more clarity and safety in your code. PropTypes validate the type of data received by the component, and if a prop with the wrong type is passed, a warning will be displayed in the console (in development mode).

PropTypes can check:

-   Basic data types (strings, numbers, booleans, etc.)
-   Objects and arrays
-   Specific structures, such as an object with a particular shape
-   Functions, elements, and more

Using PropTypes is particularly helpful when working on large codebases or collaborating with teams, as they make your code more predictable and easier to understand.

**Example 1: Basic Usage of PropTypes**

```jsx
import React from "react"
import PropTypes from "prop-types"

function Greeting({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Age: {age}</p>
        </div>
    )
}

// Define the expected prop types
Greeting.propTypes = {
    name: PropTypes.string.isRequired, // name must be a string and is required
    age: PropTypes.number, // age must be a number (not required)
}

export default Greeting
```

In this example:

-   name must be a string and is required. If the name prop is missing or isn’t a string, React will show a warning in the console.
-   age is expected to be a number, but it is not required, so it can be omitted without any warnings.

**Example 2: More Complex PropTypes**

PropTypes can also validate more complex data structures, such as arrays or objects.

```jsx
import React from "react"
import PropTypes from "prop-types"

function Book({ title, author, isAvailable, tags }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Status: {isAvailable ? "Available" : "Not Available"}</p>
            <p>Tags: {tags.join(", ")}</p>
        </div>
    )
}

// Define the prop types
Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string), // array of strings
}

export default Book
```

In this example:

-   tags must be an array of strings. If you pass an array of numbers or objects, a warning will appear.
-   isAvailable is expected to be a boolean but is optional.

**Example 3: Using PropTypes.shape for Objects**

You can also define the shape of an object using PropTypes.shape. This is useful when passing an object with a specific structure as a prop.

```jsx
import React from "react"
import PropTypes from "prop-types"

function UserCard({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

// Define the shape of the user object
UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
}

export default UserCard
```

Here, the user prop must be an object with specific properties (name, email, and age). If any of these properties are missing or of the wrong type, a warning will appear.

### Why Use PropTypes?

-   Error Prevention: PropTypes help catch errors early, especially in large applications.
-   Self-Documentation: By defining PropTypes, you make it clear what type of data a component expects, making the code more readable and easier to maintain.
-   Development-Only: PropTypes are only checked during development, so they don't affect performance in production.

### Summary of PropTypes:

-   PropTypes.string: Ensures the prop is a string.
-   PropTypes.number: Ensures the prop is a number.
-   PropTypes.bool: Ensures the prop is a boolean.
-   PropTypes.arrayOf(): Ensures the prop is an array of a specific type.
-   PropTypes.shape(): Validates the structure of an object.
-   PropTypes.func: Ensures the prop is a function.
-   PropTypes.element: Ensures the prop is a React element.
-   PropTypes.any: Allows any type (use with caution).
-   PropTypes.isRequired: Marks a prop as required.

**NOTE!!!** 

propTypes are removed in React 19.

https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops 


### Iterating Over Lists in React Using .map() and Understanding the key Prop

```jsx
import React from "react"

function FruitsList() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"]

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    )
}

export default FruitsList
```

**Explanation:**

-   We have an array of fruits: ['Apple', 'Banana', 'Orange', 'Mango'].
-   The .map() function is used to iterate through this array and render each fruit inside an `<li>` element.
-   The key prop is added to each `<li>` to help React efficiently manage and update the DOM.

**Why is the key prop important?**

The key prop is a unique identifier for each element in a list. React uses this key to track which items have changed, been added, or removed when re-rendering the list. Without a key, React wouldn't be able to differentiate between elements properly, which could lead to performance issues and even incorrect updates in some cases.

**Why the key must be unique?**

The key prop should be unique within the list to help React maintain the correct order of elements. If the keys are not unique, React might mix up elements during updates, leading to unexpected behavior.

**When is it okay to use the index as the key?**

Using the index as a key is generally not recommended, especially if the list items can change (e.g., through adding/removing/reordering). However, it's okay to use the index when:

-   The list is static (the items won’t change).
-   The list won't be re-ordered or filtered.
-   There are no unique identifiers available for the items.

For example, in this case, using the index is fine because the fruits array is static and won't change while the app is running.

If you have dynamic lists where elements might be reordered or removed, it's better to use a unique identifier for the key, such as an id from a database.

### Summary

In this lecture, we've explored the differences between class-based and functional components in React and how we pass data between components. We discussed the syntax and usage of both types of components, provided detailed examples, and explained why functional components are generally preferred. In the next lecture, we are going to discuss about state and how we can use it in our components.

### Additional Resources

-   <a href="https://react.dev/reference/react/Component" target="_blank" rel="noopener noreferrer">Class Components</a>
-   <a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noopener noreferrer">Passing Props</a>