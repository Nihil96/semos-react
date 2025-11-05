# Lecture 9: Custom Hooks and Best Practices

![Alt Text](https://velog.velcdn.com/images/hoje15v/post/2e25832a-4a43-494f-b0a2-e68ce04335a5/image.png "Custom Hooks in React")

## Introduction to Custom Hooks

### What are Custom Hooks?

Custom hooks are a way to encapsulate and reuse stateful logic in React components. While React provides a variety of built-in hooks like useState, useEffect, useContext, and others, sometimes you need to share logic across multiple components. Custom hooks allow you to extract this logic into a function that can be reused wherever needed.

Key Characteristics of Custom Hooks:

- Prefix: Always start with "use". This is a convention that ensures React knows it’s a hook.
- Functions: They are simply JavaScript functions that may call other hooks inside them.
- Reusable: They allow you to reuse complex logic without duplicating code across components.

**Example:**

```jsx
import { useState, useEffect } from "react"

// Custom Hook to fetch data from an API
function useFetchData(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetchData
```

Using the custom hook:

```jsx
import React from "react"
import useFetchData from "./useFetchData"

function DataDisplay({ url }) {
  const { data, loading, error } = useFetchData(url)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DataDisplay
```

### Benefits of Using Custom Hooks

1. Encapsulation of Logic:
   Custom hooks allow you to encapsulate complex logic and keep components focused on their primary purpose, leading to cleaner, more readable code.
2. Reusability:
   Instead of duplicating logic across components, you can reuse the custom hook wherever needed, promoting DRY (Don't Repeat Yourself) principles.
3. Separation of Concerns:
   By moving logic out of components and into custom hooks, you can separate different concerns within your application. For instance, data fetching logic can be abstracted away from UI logic.
4. Easier Testing:
   Custom hooks can be tested independently, making your codebase more maintainable. You can write unit tests for the custom hook without the overhead of testing a full component.

**Example 2:**

```jsx
import { useState } from "react"

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}
```

**Explanation:**

- Import useState: We import the useState hook from React to manage the counter state.
- Initial Value: The useCounter function takes an optional initialValue parameter, which defaults to 0.
- State Management: We use useState to create a state variable count and a function setCount to update it.
- Counter Operations: We define functions increment, decrement, and reset to modify the count state as needed.
- Return Value: The hook returns an object containing the count value and the increment, decrement, and reset functions.

**Example Usage:**

```jsx
import { useCounter } from "./useCounter"

function MyComponent() {
  const { count, increment, decrement, reset } = useCounter(10)

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

### Best Practices for Hook Usage

1. Naming Conventions:
   Start your custom hook names with "use" to follow React conventions.
   Choose descriptive names that convey the hook’s purpose (e.g., useForm, useAuth, useFetch).
2. Avoid Unnecessary Hooks:
   Not every piece of logic needs to be a custom hook. Consider the complexity and reusability before extracting logic into a custom hook.
3. Use Dependencies Wisely:
   When using hooks like useEffect inside your custom hook, pay attention to the dependency array to avoid infinite loops or missing updates.
4. Composition of Hooks:
   You can compose multiple hooks to create a more complex custom hook. For example, combining useState, useEffect, and useReducer inside a single custom hook to manage complex state logic.

### Organizing and Structuring Hook-based Code

1. Organize Hooks by Functionality:
   Store custom hooks in a hooks/ directory to keep them organized.
   For example, you might have files like useAuth.js, useFetch.js, useForm.js inside a hooks/ directory.
2. Separate Logic from UI:
   Use custom hooks to separate logic from UI code. Your components should focus primarily on rendering UI, while the hooks handle the underlying logic.
3. Reuse Hooks Across Projects:
   Extract commonly used hooks into a shared library if you work on multiple projects. This promotes reusability and consistency.

### When a Custom Hook is Overkill

Scenario: A simple function to calculate the average of an array of numbers.

Custom Hook Approach (Overkill):

```jsx
import { useState } from "react"

function useAverage(numbers) {
  const [average, setAverage] = useState(0)

  useEffect(() => {
    if (numbers.length > 0) {
      const sum = numbers.reduce((acc, cur) => acc + cur, 0)
      const avg = sum / numbers.length
      setAverage(avg)
    }
  }, [numbers])

  return average
}
```

This custom hook is overkill for this simple calculation because it introduces unnecessary state management and effects.

Helper Function Approach (Better):

```js
function calculateAverage(numbers) {
  if (numbers.length > 0) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum / numbers.length
  }
  return 0
}
```

**Explanation:**

The helper function calculateAverage directly calculates the average based on the input array.
It doesn't require state management or effects, making it a more concise and efficient solution for this simple task.

**Key Points:**

- If your logic doesn't involve state management, effects, or React-specific features, a helper function is often sufficient.
- Custom hooks are best suited for encapsulating complex logic that needs to be reused across multiple components or involves React-specific features.
- Overusing custom hooks can sometimes lead to unnecessary complexity.

### Summary

In this lecture, we explored custom hooks, a powerful tool in React that allows developers to encapsulate reusable logic in functions that can be shared across multiple components. We covered the creation and usage of custom hooks, emphasizing key benefits like code separation, reusability, and easier testing. Additionally, we discussed best practices, including naming conventions, proper use of dependencies, and how to avoid overusing custom hooks when simpler solutions like helper functions would suffice. In the next lecture, we are going to take a look at the Redux library and explain what is global state management.

### Additional Resources

- <a href="https://react.dev/learn/reusing-logic-with-custom-hooks" target="_blank" rel="noopener noreferrer">Reusing Logic With Custom Hooks</a>