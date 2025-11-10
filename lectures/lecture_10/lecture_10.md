# Lecture 10: Introduction to Redux

![Alt Text](https://cdn.pellerex.com/public/ecosystem/web/content/identity/react-identity-check/react-redux.png "React and Redux")

## Understanding the Need for Redux

**Redux** is a predictable state container for JavaScript apps, primarily used with React to manage complex state logic. It's designed to address issues with managing state across a large and dynamic application. Here's why Redux might be needed:

- Centralized State Management: Redux provides a single source of truth for your application's state, making it easier to understand and manage.
- Predictability: Redux enforces strict rules for state changes, making state mutations predictable and debugging easier.
- State Sharing: Redux allows you to share state across different parts of your application without prop drilling (passing props through many layers of components).
- Developer Tools: Redux comes with powerful developer tools to trace and debug state changes.

**Example Scenario:** Imagine a large application with multiple components needing access to the same state, such as a user authentication status. Managing this state through props can become cumbersome and error-prone. Redux simplifies this by allowing the state to be stored and managed in a central location.

### Core Concepts: Store, Reducers, and Actions

Redux revolves around three core concepts: Store, Reducers, and Actions. Let's break each of them down:

**a. Store**

The Store is the central repository for the application's state. It holds the state, allows access to it, and provides methods to dispatch actions and subscribe to state changes.

**b. Reducers**

Reducers are functions that specify how the application's state changes in response to actions. They are pure functions that take the current state and an action as arguments and return a new state.

**c. Actions**

Actions are plain JavaScript objects that describe what happened in the application. They must have a type property and can optionally include other data as payload.

### Setting up Redux in a React App

**Step 1: Install Redux**

To use Redux with React, you need to install Redux and its bindings for React:

```
npm install redux react-redux
```

**Step 2: Create Redux Store**

Create a file `store.js`:

```js
import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

// creating a store for one reducer
export const store = createStore(counterReducer);
```

**Step 3: Create Reducers**

Create a file `counterReducer.js`:

```js
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "../actions/counterActions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
```

**Step 4: Create Actions**

Create a file `counterActions.js`:

```js
export const COUNTER_INCREMENT = "INCREMENT";
export const COUNTER_DECREMENT = "DECREMENT";
export const COUNTER_RESET = "RESET";

export const increment = () => ({
  type: COUNTER_INCREMENT,
});

export const decrement = () => ({
  type: COUNTER_DECREMENT,
});

export const reset = () => ({
  type: COUNTER_RESET,
});
```

**Step 5: Connect React with Redux**

Wrap your application with the Provider component from react-redux to make the store available to your components:

In the `main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

**Step 6: Use Redux State in Components**

Use `useSelector` and `useDispatch` from react-redux to access the Redux state and dispatch actions:

```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ margin: "5px", padding: "10px" }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ margin: "5px", padding: "10px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
```

### Immutability in Redux

In Redux, **immutability** is crucial because it ensures that the state is never modified directly. Instead of mutating the existing state, we create a new copy of the state with the desired updates. This approach helps maintain a predictable state change flow, making debugging easier and enabling features like time travel debugging in Redux DevTools.

When a state change occurs, Redux needs to recognize that change to update the UI. Directly mutating the state won't trigger the necessary change detection, which can lead to unexpected behavior. To avoid these issues, we should always work with a new copy of the state when making updates.

❌ Bad: Mutating the State Directly

```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      state.count += 1; // Mutates the original state directly
      return state;
    default:
      return state;
  }
}
```

✅ Good: Creating a New Copy of the State

```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1, // Creates a new state object with the updated count
      };
    default:
      return state;
  }
}
```

Here, we use the spread operator (...state) to create a new object that copies all properties from the current state, and then we override the count property. This ensures that the original state remains unchanged, preserving immutability.

Another option is to use a helper library like `Immer` to handle immutability more easily, especially with nested state structures.

By following this pattern, we maintain the integrity of our state and ensure that Redux can correctly identify changes and update the application accordingly.

### When to Use Redux

Redux is a more robust and scalable solution for managing state in larger applications where there are complex state interactions across multiple components. You would typically use Redux when:

1. Complex State Logic:
   If your app has deeply nested state that is hard to pass through props, and multiple components need to access and update this state.
   **Example:** In an e-commerce application where you need to track user data, product data, cart items, and handle asynchronous updates from an API (like fetching products or processing payments).

2. Cross-Component Communication:
   When multiple, often unrelated components in different parts of your app need access to the same state or actions.
   **Example:** A notification system where the state (notifications) is used in both the header and notification list components, but these components don’t share a direct parent-child relationship.

3. Predictable State Management:
   Redux enforces a strict unidirectional data flow with clear, predictable state updates through actions and reducers. This makes debugging and testing easier.
   **Example:** If you need to trace every action (like in an undo/redo system) or debug state changes over time using Redux DevTools.

4. Middleware for Side Effects:
   When your app requires handling of complex side effects like asynchronous API calls, Redux with middleware like redux-thunk or redux-saga can help manage side effects in a clean, organized way.
   **Example:** Managing network requests (fetching data, handling authentication) or handling complex workflows that involve multiple stages.

5. Large Scale Applications:
   In larger applications with many developers or modules, Redux’s structured approach provides more control over how state is accessed and updated, making the app easier to scale and maintain.
   **Example:** Social media platforms where different features like posts, users, messages, notifications, etc., are handled separately, but state needs to be globally accessible.

### When to Avoid Redux

- If your app is small or medium-sized, and you only need to manage a few pieces of state, Redux may be overkill.
- If state management is simple and doesn’t require complex side effects or multi-level state interactions, Context API is sufficient.

### Choosing the Right Tool

- Use **Redux** when you have a complex state management scenario that requires predictable state transitions, global state accessible to many components, and potentially a need for asynchronous side effects.
- Use **Context API** when you have simpler, smaller-scale applications that just need to pass data or state between multiple components without complex workflows.

### Note: 

In this module, we’re learning Redux using the older pattern with hooks to help you understand how Redux works under the hood and to prepare you for maintaining legacy projects that still use this approach. Once you feel comfortable with these fundamentals, I recommend exploring [**Redux Toolkit (RTK)**](https://redux-toolkit.js.org/) — the modern and more efficient way to write Redux code.

### Summary

In this lecture, we've covered:

- The Need for Redux: Understanding how Redux addresses complex state management issues in large applications.
- Core Concepts: Store, Reducers, and Actions.
- Setting Up Redux: Installing Redux, creating a store, reducers, actions, and connecting Redux with React.

In the next one, we are going to take a look at Redux Middleware and Asynchronous Actions

### Additional Resources

- <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">Redux Library</a>
- <a href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank" rel="noopener noreferrer">Redux DevTools Extension</a>