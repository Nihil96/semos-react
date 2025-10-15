# Lecture 4: Working With Hooks

![Alt Text](https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg "React Hooks!")

## What are Hooks in React?

Hooks are a new addition to React (introduced in React 16.8) that allow you to use state and other React features without writing a class. They enable functional components to manage state, handle side effects, and more.

### Why Hooks?

1. **Simplify Code**: Hooks make it easier to reuse stateful logic and simplify the code structure.
2. **Functional Components**: Enable functional components to have state and lifecycle features.
3. **Cleaner and More Readable**: Hooks often lead to cleaner, more readable code compared to class components.

## When Should You Use `useState`?

`useState` is a Hook that lets you add state to functional components. It is used for managing local state within a component.

### Example: Using `useState`

**LightSwitch.jsx**

```jsx
import React, { useState } from "react"

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(true)

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: isLightOn ? "#fff8dc" : "#2c3e50",
        color: isLightOn ? "#000" : "#fff",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <h2>{isLightOn ? "☀️ Light Mode" : "🌙 Dark Mode"}</h2>
      <button onClick={() => setIsLightOn((prev) => !prev)}>
        Toggle Light
      </button>
    </div>
  )
}

export default LightSwitch
```

**Explanation:**

- Initial State: isLightOn starts as true (light mode).
- Toggling State: Clicking the button flips between light and dark mode.
- Dynamic UI: Background and text colors change based on the state.

### How Does the useEffect Hook Work?

In functional components, the `useEffect` hook allows you to perform side effects (e.g., data fetching, setting up subscriptions, or updating the DOM) after rendering. It's similar to the lifecycle methods (`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`) in class components but consolidated into one hook.

useEffect runs after the render is committed to the screen, and it can be configured to run in different scenarios depending on the dependency array you provide.

**Example 1: useEffect that runs after every re-render**

```jsx
import React, { useEffect, useState } from "react"

function SimpleEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect runs after every render")
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default SimpleEffect
```

**Explanation:**

- The useEffect in this example runs after every render. This means it will run after the initial render and after every re-render (such as when the state changes).
- No dependency array means it doesn't matter what changes—useEffect will execute.

**Example 2: useEffect that runs only once after initial render**

```jsx
import React, { useEffect, useState } from "react"

function EffectOnce() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect runs only once after initial render")
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default EffectOnce
```

**Explanation:**

- Adding an empty dependency array ([]) tells React to run the useEffect only once, after the initial render.
- This is equivalent to `componentDidMount` in class components. It's commonly used for things like fetching data when the component first mounts.

**Example 3: useEffect with dependencies**

```jsx
import React, { useEffect, useState } from "react"

function EffectWithDeps() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`useEffect runs when count changes: ${count}`)
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default EffectWithDeps
```

**Explanation:**

- In this case, useEffect runs only when the count state changes. The dependency array contains [count], so it watches for changes to count.
- If count changes, the useEffect re-runs, similar to `componentDidUpdate` in class components.

**Example 4: useEffect with cleanup function**

```jsx
import { useEffect, useState } from "react"

function EffectUnmount() {
  useEffect(() => {
    console.log("Component mounted")

    return () => {
      console.log("Component will unmount")
    }
  }, [])

  return <div>useEffect with cleanup function</div>
}

function App() {
  const [showComponent, setShowComponent] = useState(true)

  return (
    <div>
      {showComponent ? <EffectUnmount /> : null}
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
    </div>
  )
}

export default App
```

**Explanation:**

- Even with an empty dependency array, the cleanup function runs once before the component is unmounted.
- This is the equivalent of componentWillUnmount in class components and is commonly used for cleaning up when a component is removed from the DOM.

**Example 5: useEffect with infinite loop**

```jsx
function InfiniteLoop() {
  const [count, setCount] = useState(0)

  // this will cause infinite loop
  useEffect(() => {
    setCount(count + 1)
  })

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}
```

**Explanation:**

Effects run as a result of rendering. Setting state triggers rendering. Setting state immediately in an Effect is like plugging a power outlet into itself. The Effect runs, it sets the state, which causes a re-render, which causes the Effect to run, it sets the state again, this causes another re-render, and so on.

**Example 6: Making a simple Timer component**

```jsx
import React, { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    // Cleanup function
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  )
}

export default Timer
```

**Explanation:**

- Effect Hook: useEffect runs the provided function after every render. By default, it runs after the first render and every update.
- Interval: An interval is set up to increment the seconds state every second.
- Cleanup: The cleanup function (return () => clearInterval(interval)) stops the interval when the component is unmounted or before the next effect runs.

### Summary of useEffect Usage:

- Without Dependency Array: Runs after every render.
- With Empty Dependency Array: Runs once after the first render (like `componentDidMount`).
- With Dependencies: Runs when the specified dependencies change (like `componentDidUpdate`).
- Cleanup Function: Cleans up before running the next effect or before unmounting (like `componentWillUnmount`).
- Be cautious when using `setState` inside `useEffect`. Ensure that state updates don't directly depend on the value being modified within the `useEffect`, or you'll risk causing an infinite loop.

### Working with useRef

There are bunch of other hooks in React but `useRef` is really common use. `useRef` is a Hook that lets you persist values between renders without causing re-renders. It is often used to reference DOM elements directly.

**Example: Using useRef**

```jsx
import React, { useRef } from "react"

function TextInput() {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default TextInput
```

**Explanation:**

- useRef Hook: useRef(null) creates a ref object with an initial value of null.
- Accessing DOM Elements: The inputRef is passed to the ref attribute of the <input> element to directly access the DOM node.
- Focusing Input: The focusInput function calls inputRef.current.focus() to focus the input element.

### Rules of Hooks

**1. Only Call Hooks at the Top Level:**

Don't call Hooks inside loops, conditions, or nested functions. Always use Hooks at the top level of your React function to ensure they are called in the same order every time a component renders.

```jsx
// ✅ Correct
function MyComponent() {
  const [count, setCount] = useState(0)
  // other logic
}

// ❌ Incorrect
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0)
  }
}
```

**2. Only Call Hooks from React Functions:**

Call Hooks from React function components or custom Hooks. Don't call Hooks from regular JavaScript functions.

```jsx
// ✅ Correct
function MyComponent() {
  const [count, setCount] = useState(0)
}

function useCustomHook() {
  const [value, setValue] = useState("Hello")
  return [value, setValue]
}

// ❌ Incorrect
function regularFunction() {
  const [count, setCount] = useState(0)
}
```

**3. It’s not supported to call Hooks (functions starting with use) in any other cases, for example:**

🔴 Do not call Hooks inside conditions or loops.

🔴 Do not call Hooks after a conditional return statement.

🔴 Do not call Hooks in event handlers.

🔴 Do not call Hooks in class components.

🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.

### Summary

In this lecture, we explored the basics of React Hooks, focusing on useState and useEffect. We also introduced one additional hook useRef, which is a valuable addition when working with DOM references in functional components. Hooks are a powerful feature in React that enable you to write cleaner, more modular code by using functional components instead of class components.

### Additional Resources

- <a href="https://react.dev/reference/react/hooks" target="_blank" rel="noopener noreferrer">Hooks</a>
- <a href="https://react.dev/reference/react/useState" target="_blank" rel="noopener noreferrer">useState</a>
- <a href="https://react.dev/reference/react/useEffect" target="_blank" rel="noopener noreferrer">useEffect</a>
- <a href="https://react.dev/reference/react/useRef" target="_blank" rel="noopener noreferrer">useRef</a>