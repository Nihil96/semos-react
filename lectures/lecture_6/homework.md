## Homework 6

### Exercise 1: Dual Approach Contact Form

**Objective:** Create a "Contact Form" in React that validates user input in two different ways: once using controlled components and once using uncontrolled components. The form should include fields for the user's name, email, and a message. The goal is to understand how controlled and uncontrolled components handle state and validation.

**Form Requirements:**

1. Form Fields:
   Name: (Text input)
   Email: (Email input)
   Message: (Textarea)

2. Validation Rules:
   Name: Required and should be at least 3 characters long.
   Email: Required and should be a valid email address.
   Message: Required and should be at least 10 characters long.

3. Two Implementations:

- **Controlled Components**: Implement the form using React's state to manage the input values and handle validation.
- **Uncontrolled Components**: Implement the same form using refs to access the input values directly from the DOM and handle validation.

4. Form Submission:

- On submission, validate the input fields. If any validation fails, display an error message next to the respective field. If all fields are valid, display the submitted data below the form.

### Exercise 2: Multi-Input Form

**Objective:**
Create a more complex form in React that includes not only text inputs but also radio buttons, checkboxes, and a dropdown. Implement the form using only controlled component.

**Form Requirements:**

1. Form Fields:

- Name: (Text input) - Required, at least 3 characters.
- Email: (Email input) - Required, valid email format.
- Gender: (Radio buttons) - Required.
- Interests: (Checkboxes) - At least one checkbox must be selected.
- Country: (Dropdown) - Required.

2. Implementation:

- Manage form state using React's useState.

3. Form Submission:

- On submission, validate all fields. If any validation fails, display an error message next to the respective field. If all fields are valid, display the submitted data below the form.
