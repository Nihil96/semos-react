# Lecture 11: Redux Middleware and Asynchronous Actions

![Alt Text](https://i.ytimg.com/vi/v_6WDhwUxSg/maxresdefault.jpg "Redux Middleware")

In this lecture, we will explore how middleware enhances Redux's functionality, especially when handling asynchronous actions like API calls. We will use Redux Thunk, one of the most common middleware for managing side effects in Redux applications. Finally, we'll learn how to work with asynchronous actions using the useSelector and useDispatch hooks.

## What is Redux Thunk?

Redux Thunk is a middleware for Redux that allows you to write action creators that return a function (instead of an action object). This is especially useful for handling asynchronous logic like fetching data from an API. Normally, Redux only allows plain action objects to be dispatched, but with Redux Thunk, you can dispatch functions, which gives you more control over the timing and flow of your actions.

## What is Middleware?

Middleware in Redux is essentially a bridge between the dispatching of an action and the moment it reaches the reducer. It allows you to intercept actions and modify or handle them before they hit the reducer. Middleware is powerful because it can be used to handle side effects (e.g., API calls) and manage asynchronous actions.

Think of middleware as a filter where actions pass through before they go to the reducer, and you can use that filter to add custom behavior, logging, or any asynchronous logic.

## How Redux Thunk Works

Redux Thunk works by letting action creators return a function that receives dispatch and getState as arguments, allowing you to dispatch actions manually inside that function. This is particularly useful when you need to delay the dispatching of an action (for example, after an API request is resolved).

**Example without Thunk**

In Redux, normally you'd create a simple action like this:

```js
// Action Creator
const fetchUser = (userId) => ({
  type: "FETCH_USER",
  payload: userId,
});
```

However, this is synchronous, and in real-world applications, you'd often need to make asynchronous calls (like fetching data from an API), which can't be done with plain actions.

**Example with Thunk**

With redux-thunk, you can write asynchronous logic like this:

```js
// Action Creator with Thunk
const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USER_REQUEST" }); // Before making the request

    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const data = await response.json();

      dispatch({ type: "FETCH_USER_SUCCESS", payload: data }); // Success action
    } catch (error) {
      dispatch({ type: "FETCH_USER_FAILURE", error: error.message }); // Error handling
    }
  };
};
```

Here’s a breakdown of what’s happening:

1. The fetchUser action returns a function (instead of an object) that takes dispatch as an argument.
2. Inside the returned function, you can dispatch multiple actions:

- A request action (FETCH_USER_REQUEST) before starting the async operation.
- A success action (FETCH_USER_SUCCESS) once the data is received.
- A failure action (FETCH_USER_FAILURE) if the request fails.

## Working with Middleware in Redux

Middleware in Redux provides a way to extend Redux's capabilities by intercepting actions before they reach the reducer. It allows us to handle side effects, such as logging, API requests, or even modifying actions.

**Key Points:**

- Middleware is a function that sits between the dispatching of an action and the moment the action reaches the reducer.
- Middleware can perform a variety of tasks, such as making async requests, logging, or modifying actions.

**Example:**

Here’s a simple middleware that logs all actions and the state after the action is dispatched.

```js
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  let result = next(action);
  console.log("Next State:", store.getState());
  return result;
};
```

In Redux, you apply middleware by using the applyMiddleware function from Redux.

```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
```

In this example, every action dispatched will first go through the loggerMiddleware, which logs the action and the resulting state.

## Making Asynchronous API Calls with Redux Thunk

One of the most common tasks in modern applications is making asynchronous API calls. Redux by itself only handles synchronous actions, but with Redux Thunk, we can work with asynchronous actions as well.

### Why Use Redux Thunk?

Dealing with async requests: With Redux Thunk, you can delay the dispatching of actions until an async operation (e.g., an API call) has been completed.
Conditional dispatching: You can dispatch actions conditionally based on the current state or other logic.

**Setting up Redux Thunk:**

1. First, install Redux Thunk:

```
npm install redux-thunk
```

2. Apply Redux Thunk as middleware:

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

**Example: Fetching Data Asynchronously with Redux Thunk**

Let’s create a simple example where we fetch a list of users from an API.
Actions:

```js
// Synchronous actions
const fetchUsersRequest = () => ({
  type: "FETCH_USERS_REQUEST",
});

const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: "FETCH_USERS_FAILURE",
  payload: error,
});

// Asynchronous action using thunk
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
```

### Working with useSelector and useDispatch Hooks

In React-Redux, we use two hooks: useSelector and useDispatch to interact with Redux state and dispatch actions as we saw in the previous lecture. Let’s refresh a bit our memory of how these two hooks work:

**useSelector Hook:**

The useSelector hook allows you to select a part of the Redux state in a functional component.

```js
const users = useSelector((state) => state.users);
const loading = useSelector((state) => state.loading);
const error = useSelector((state) => state.error);
```

**useDispatch Hook:**

The useDispatch hook gives access to the dispatch function, allowing you to dispatch actions from within your component.

```js
const dispatch = useDispatch();

// Dispatch an action to fetch users
useEffect(() => {
  dispatch(fetchUsers());
}, [dispatch]);
```

**Complete Example:**

```jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./actions/userActions";

function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

### Middleware Use Cases​

So, what can we do with middleware? Lots of things!

A middleware can do anything it wants when it sees a dispatched action:

- Log something to the console
- Set timeouts
- Make asynchronous API calls
- Modify the action
- Pause the action or even stop it entirely

and anything else you can think of.

In particular, middleware are intended to contain logic with side effects. In addition, middleware can modify dispatch to accept things that are not plain action objects.

### Summary:

In this lecture, we've covered:

- Middleware in Redux enhances functionality by handling side effects (e.g., logging, API calls).
- Redux Thunk allows us to write asynchronous action creators that handle API calls.
- We manage async state (loading, success, failure) with synchronous actions (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE).

In our next project, we’ll be creating a movie application using React and Redux, featuring pagination, search functionality, animations, and responsive design. Additionally, we’ll learn how to build and deploy the app on Netlify.

### Additional Resources

- <a href="https://redux.js.org/understanding/history-and-design/middleware" target="_blank" rel="noopener noreferrer">Redux Middleware</a>