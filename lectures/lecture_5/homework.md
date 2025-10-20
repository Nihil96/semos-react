## Homework 5

### Exercise 1: Color Picker

**Objective:**

Create a React component that allows users to select a color from a list of predefined colors. Upon selection, the background color of a box should change to the selected color.

**Instructions:**

1. Create a Functional Component named ColorPicker:
   This component should render a list of color options (e.g., red, green, blue, yellow) as buttons.
   When a button is clicked, the background color of a display box should change to the selected color.
2. Manage State:
   Use the useState hook to manage the current color selected by the user.
3. Add Event Handling:
   Add onClick event handlers to each button to update the state with the corresponding color.
4. Display Box:
   Render a box that changes its background color based on the current selected color.
5. Styling the Component:
   Use inline styles or CSS to style the buttons and the display box. The display box should have a default size and centered text.
6. Render the Component in App.jsx:
   Import and render your ColorPicker component in the main App.jsx file.

**Bonus Requirement: Add Custom Colors**

1. Add an Input Field and Button for Custom Colors:
   Below the existing color buttons, add an input field where users can type a custom color (either a color name like "purple" or a hex code like "#ff5733").
   Add a button labeled "Add Color" next to the input field.
2. Update State to Manage Custom Colors:
   Use the useState hook to manage an array of colors, including both the predefined colors and any custom colors added by the user.
   Add Validation:
3. Validate the custom color input to ensure it is a valid color name or hex code.
   If the input is not valid, display an error message to the user.
4. Dynamic Rendering of Custom Colors:
   When a new color is added and validated, it should immediately appear as a new button that can be clicked to change the display box's background color.
5. Prevent Duplicate Colors:
   Check if the color already exists in the list before adding it to avoid duplicates.
