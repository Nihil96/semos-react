# Lecture 5: Handling Events in React

![Alt Text](https://miro.medium.com/v2/resize:fit:828/1*Lbt6vjwNDbDeiZgepwPjMg.png "Handling Events in React")

## Event Handling in React Components

Event handling in React is similar to handling events in regular HTML, but with some key differences. React provides a unified way of handling events across different browsers using a concept called "Synthetic Events".

### Basic Event Handling

To handle an event in a React component, you define an event handler function and pass it as a prop to the JSX element.

**Example: Basic Event Handling**

```jsx
import React from "react";

function ButtonClick() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonClick;
```

**Explanation:**

- Event Handler: The handleClick function is defined to handle the button click event.
- Passing Handler: The handleClick function is passed to the onClick prop of the <button> element.

## Handling Mouse and Keyboard Events

React provides a variety of event handlers for different types of events, including mouse and keyboard events.

### Handling Mouse Events

Mouse events can be handled using event handlers like onClick, onMouseEnter, onMouseLeave, etc.

**Example: Mouse Events**

```jsx
import React from "react";

function MouseEvents() {
  const handleMouseEnter = () => {
    console.log("Mouse entered the button!");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left the button!");
  };

  return (
    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover Over Me
    </button>
  );
}

export default MouseEvents;
```

**Explanation:**

- Mouse Enter: The handleMouseEnter function is called when the mouse enters the button.
- Mouse Leave: The handleMouseLeave function is called when the mouse leaves the button.

### Handling Keyboard Events

Keyboard events can be handled using event handlers like `onKeyDown`, `onKeyUp`, and `onKeyPress`.

**Example: Keyboard Events**

```jsx
import React from "react";

function KeyboardEvents() {
  const handleKeyDown = (event) => {
    console.log(`Key pressed: ${event.key}`);
  };

  return (
    <input type="text" onKeyDown={handleKeyDown} placeholder="Press any key" />
  );
}

export default KeyboardEvents;
```

**Explanation:**

- Key Down: The handleKeyDown function is called whenever a key is pressed while the input field is focused. The event object contains details about the key press.

**Example: Handling Keyboard Events with useEffect**

```jsx
import React, { useState, useEffect } from "react";

function ColorChanger() {
  const [color, setColor] = useState("#ffffff");

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // Function to handle key press
    const handleKeyPress = (event) => {
      // 32 is the key code for spacebar
      if (event.keyCode === 32) {
        setColor(getRandomColor());
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to run only on mount/unmount

  return (
    <div
      style={{ backgroundColor: color, height: "200px", textAlign: "center" }}
    >
      <h2>Press the spacebar to change the background color!</h2>
    </div>
  );
}
```

**Explanation:**

- The useEffect is used to add the keydown event listener to the window object when the component mounts.
- It listens for the "keydown" event, specifically checking for the spacebar (key code 32).
- Inside the return statement of useEffect, we remove the event listener to prevent it from staying active after the component unmounts, ensuring no memory leaks.
- getRandomColor() generates a random hexadecimal color each time the spacebar is pressed.

## What is the “Synthetic Event”?

React implements a cross-browser wrapper around the browser's native event system. This wrapper is known as a Synthetic Event. Synthetic events are consistent across different browsers, making it easier to handle events in a uniform manner.

### Synthetic Event Properties

Synthetic events have the same interface as native events, including properties like event.target, event.type, and methods like `event.preventDefault()` and `event.stopPropagation()`.

**Example: Synthetic Event**

SyntheticEvent.jsx

```jsx
import React from "react";

function SyntheticEventExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SyntheticEventExample;
```

**Explanation:**

- Prevent Default: event.preventDefault() is called to prevent the default form submission behavior.
- Form Submission: The handleSubmit function handles the form submission event using a synthetic event.

## Additional Tips for Event Handling

### Passing Arguments to Event Handlers

You can pass arguments to event handlers by wrapping them in an anonymous function.

**Example: Passing Arguments**

```jsx
import React from "react";

function ArgumentPassing() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => handleClick("Button clicked!")}>Click Me</button>
  );
}

export default ArgumentPassing;
```

**Explanation:**

- Anonymous Function: The handleClick function is wrapped in an anonymous function to pass the message argument.

### Event Handling Best Practices

- Use Descriptive Names: Name your event handler functions descriptively to indicate what they do.
- Keep Handlers Small: Keep your event handler functions small and focused on a single task.
- Avoid Inline Handlers: Avoid defining event handlers inline in JSX to keep your code clean and maintainable.

### Summary

In this lecture, we covered the basics of event handling in React components, including handling mouse and keyboard events and understanding synthetic events. We also discussed best practices and additional tips for effective event handling. In the next lecture we are going to take a look at how we can handle forms in React.

### Additional Resources

- <a href="https://react.dev/learn/adding-interactivity" target="_blank" rel="noopener noreferrer">Adding Interactivity</a>
- <a href="https://react.dev/learn/responding-to-events" target="_blank" rel="noopener noreferrer">Responding to Events</a>
