## Homework

### Exercise: Building a Simple Todo List App with Context API

**Objective:**
Create a simple Todo List application using React and the Context API. The app should allow users to add, edit, delete, and mark tasks as complete. Exercise Requirements:

1. **Initialize the Project:**

- Initialize a new React application using or use an existing one.

2. **Create a folder structure that includes components and context folders.**

- Create the TodoContext:
- Inside the context folder, create a TodoContext.jsx file.
- Use React.createContext() to create a context for managing the todo list state.
- Implement a TodoProvider component that will provide state and functions for managing todos (add, delete, edit, mark as complete).

3. **Todo Context Structure:**

- The context should provide the following state and functions:
  - _State:_
    - todos - an array to store todo items. Each todo should be an object with properties: id, text, isCompleted.
  - _Functions:_
    - addTodo(text) - adds a new todo item with the provided text.
    - deleteTodo(id) - removes a todo item by its id.
    - editTodo(id, newText) - updates the text of a todo item.
    - toggleComplete(id) - toggles the completion status of a todo item.

4. **Build the Components:**
   - `App.jsx`: The main component that uses TodoProvider to wrap all other components.
   - `TodoList.jsx`:
     - Displays the list of todos. If the list is empty, display a message saying "Add some items to the list".
     - Each todo should be displayed with the following elements:
     - Complete Button or icon: A button/icon on the left side to mark the todo as complete or incomplete.
     - Todo Text: The text of the todo.
     - Edit Button: A button on the right side to enable editing of the todo item.
     - Delete Button: A button on the right side to delete the todo item.
     - When a todo is marked as complete, it should have a visual indicator (e.g., strikethrough text or different color).

- `AddTodo.jsx`:
  - Contains an input field and an "Add" button at the top of the todo list.
  - Allows users to enter new todo items and add them to the list by clicking the "Add" button.
  - When the input is empty or only spaces are entered, the "Add" button should be disabled.