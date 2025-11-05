## Homework

### Exercise 1: Custom Hook and Form with Local Storage Persistence

**Objective:**
Create a form that collects user details and persist the data using a custom useLocalStorage hook. The goal is to ensure that the form data remains intact even after refreshing or reloading the page.

**Requirements:**

1. _Form Fields:_

- Username
- Password
- Email
- Address
  State (Dropdown with some predefined states)

2. _Custom Hook (useLocalStorage):_

- Create a custom hook useLocalStorage that will handle saving and retrieving data from the browser's localStorage.
- The hook should provide a way to store the form data and retrieve it on page reload.

3. _Form Functionality:_

- When the user fills out the form and submits it, the data should be saved to localStorage using the useLocalStorage hook.
- On page load, if there is already data saved in localStorage, the form should be pre-populated with the saved data.

4. _Input Validation:_

- Add basic input validation for each field. For example, username should not be empty, email should be in a valid format, and the password should have at least 6 characters.

5.  _Form Submission:_

- There should be a submit button, but no actual backend API call is needed.
- Display the submitted data below the form once it's successfully stored in local storage.

6. _Styling:_

- Add minimal inline styling or CSS to make the form user-friendly and visually clean.

**Bonus Challenge:**

- Clear Form Data: Add a "Clear Form" button that allows users to clear both the form and the localStorage values.

### Exercise 2: Building a Custom Hook for Mouse Position Tracking

**Objective:**
Create a custom hook that tracks the current position of the mouse on the screen. This hook will allow components to react to mouse movements, which can be useful for interactive UI elements, custom cursors, or data visualizations.

**Requirements:**

1. Create a Custom Hook (`useMousePosition`):
    - This hook should return an object containing the x and y coordinates of the mouse.
    - Use the useState and useEffect hooks to manage and update the mouse position.
    - Attach an event listener to the mousemove event to detect when the mouse moves.
    - Clean up the event listener when the component unmounts.
2. Use the Custom Hook in a Component:
    - Create a component called MouseTracker that uses the useMousePosition hook.
    - Display the current mouse x and y coordinates in a visually appealing format.
3. Bonus (Optional): Add Interactive Elements:
    - Create a small div (e.g., 50x50 pixels) that follows the mouse cursor around the screen.
