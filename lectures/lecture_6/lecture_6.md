# Lecture 6: Forms and Form Handling

![Alt Text](https://spencerpauly.com/content/images/2022/07/blog-form-design-pattern-01.png "Forms in React")

## Working with Forms in React

In this lecture, we'll explore how to work with forms in React, dive into the differences between controlled and uncontrolled components, and discuss best practices for form validation and error handling. Forms are a fundamental part of web development, and mastering their use in React will allow you to build dynamic, responsive, and user-friendly applications.

Forms in React are similar to standard HTML forms, but with enhanced capabilities. In React, form elements can be controlled by the state of the component, allowing for real-time updates and validations as the user interacts with the form.

### Example of a basic form

```jsx
import React, { useState } from "react";

function BasicForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
```

**Explanation:**

- State Management: The name state is used to store the value of the input field.
- Event Handling: The handleSubmit function handles the form submission and prevents the default page reload behavior with e.preventDefault().
- Two-Way Binding: The value attribute in the input field is bound to the state, and the onChange event updates the state as the user types.

**Example of a React form with radio buttons**

```jsx
import React, { useState } from "react";

function RadioFormExample() {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected gender:", gender);
  };

  return (
    <div>
      <h2>React Form Example with radio buttons</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RadioFormExample;
```

**Explanation:**

In this example, we have a functional component called RadioFormExample that represents a form with radio buttons for selecting a gender. The `useState` hook is used to create a state variable called gender and a corresponding setter function `setGender` to manage the selected gender value.

The handleGenderChange function is triggered whenever a radio button is clicked. It updates the gender state with the value of the selected radio button.

The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior and logs the selected gender to the console. Each radio button has a unique value attribute and shares the same name attribute. The checked attribute is set based on whether the gender state matches the respective radio button's value. The onChange event handler is attached to each radio button to capture the selection and update the state accordingly.

**Example of a React form with checkboxes**

```jsx
import React, { useState } from "react";

function CheckboxFormExample() {
  const [hobbies, setHobbies] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected hobbies:", hobbies);
  };

  return (
    <div>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            value="reading"
            checked={hobbies.includes("reading")}
            onChange={handleCheckboxChange}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            value="sports"
            checked={hobbies.includes("sports")}
            onChange={handleCheckboxChange}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            value="cooking"
            checked={hobbies.includes("cooking")}
            onChange={handleCheckboxChange}
          />
          Cooking
        </label>
        <button type="submit" disabled={hobbies.length === 0 ? true : false}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckboxFormExample;
```

**Example of a React form with a select dropdown**

```jsx
function DropdownFormExample() {
  const [country, setCountry] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected country:", country);
  };

  return (
    <div>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="countrySelect">Select Country:</label>
        <select
          id="countrySelect"
          value={country}
          onChange={handleCountryChange}
        >
          <option value="">-- Select --</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DropdownFormExample;
```

## Controlled vs Uncontrolled Components

### Controlled Components

In a controlled component, form data is handled by the React component state. The form input elements are controlled by the state, and their values are updated via event handlers.

**Example:**

```jsx
function ControlledInput() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Email: {email}</p>
    </div>
  );
}
```

- React has full control over the form elements.
- Easier to implement validation, conditional rendering, and other logic.

### Uncontrolled Components

In an uncontrolled component, form data is handled by the DOM itself. React does not manage the state directly; instead, you access the values via refs (references) when needed.

**Example:**

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
```

- Sometimes simpler and more straightforward for basic forms.
- Useful when you don't need to re-render the component on every input change.

### Controlled vs. Uncontrolled: Which to Use?

- Controlled components are recommended when you need to keep track of the form data, perform validations, or update the UI based on user input.
- Uncontrolled components can be used for simple forms or when integrating with third-party libraries where direct access to the DOM elements is necessary.

## Form Validation and Error Handling

Form validation is crucial to ensure that the data entered by users is correct and complete. React allows you to implement both client-side validation and custom validation logic.

**Example: Simple Form Validation**

```jsx
import React, { useState } from "react";

function FormWithValidation() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert(`Form submitted with username: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithValidation;
```

**Explanation:**

- Validation Logic: The form checks if the username field is empty before submission. If empty, an error message is displayed.
- Error Handling: The error state is used to display error messages to the user.

### Best Practices for Form Handling in React

- Keep forms controlled: Controlled components offer better control over form inputs and allow for more advanced features like validation, dynamic updates, and conditional rendering.
- Use validation libraries: For complex forms, consider using validation libraries like `Formik` or `React Hook Form` to simplify the validation process.
- Handle errors gracefully: Display error messages near the corresponding input fields, and ensure that error messages are clear and helpful to the user.
- Provide feedback: Always provide visual feedback to users, such as highlighting errors or showing success messages after submission.
- Accessibility: Ensure that your forms are accessible to all users, including those using screen readers. Label inputs properly and ensure that the form can be navigated using a keyboard.

### Summary

In this lecture, we explored the key concepts of working with forms in React, focusing on the difference between controlled and uncontrolled components. We discussed how controlled components manage form data using React state, while uncontrolled components rely on direct access to the DOM via refs. We also covered form validation techniques to ensure correct user input, using both basic custom validation and libraries for more complex forms. Finally, best practices such as error handling, feedback, and accessibility were emphasized to create user-friendly and efficient form experiences. In the next one, we are going to introduce the React Router library.

### Additional Resources

- <a href="https://react.dev/reference/react-dom/components/form" target="_blank" rel="noopener noreferrer">Forms</a>
- <a href="https://formik.org/" target="_blank" rel="noopener noreferrer">Formik - Library for building forms</a>
- <a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">React Hook Form - Library for performant forms</a>
