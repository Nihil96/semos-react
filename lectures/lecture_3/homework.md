## Homework 3

### Exercise 1: User Status Dashboard

**Objective:**

Create a simple User Status Dashboard that displays different content based on the user's login status and role (admin or regular user).

**Requirements:**

1. **Components:**
    - App: The main component that holds the state for user status.
    - UserStatus: A component that displays different messages based on whether the user is logged in, logged out, or an admin.
    - AdminPanel: A component that displays admin-specific content.
    - Login: A component that prompts users to log in.
2. **State Management:**
    - The App component should manage the following state:
        - isLoggedIn (boolean)
        - isAdmin (boolean)
3. **Functionality:**
    - Users can toggle their login status between logged in and logged out.
    - If logged in, users can toggle between admin and regular user roles.
4. **Conditional Rendering Logic:**
    - If the user is logged out, render the Login component.
    - If the user is logged in as an admin, render the UserStatus component with a welcome message and the AdminPanel.
    - If the user is logged in as a regular user, render the UserStatus component with a welcome message but without the AdminPanel.

### Exercise 2: Mood Tracker

**Objective:**

Create a Mood Tracker app where the user can select their current mood from a set of buttons. The app should display the selected mood and a corresponding emoji.

**Components:**

1. **MoodSelector:**

    - Contains buttons for different moods (e.g., Happy, Sad, Excited, Tired).
    - When a button is clicked, it updates the current mood in the parent component using useState.

2. **MoodDisplay:**
    - Receives the current mood as a prop and displays the mood text and an emoji that represents the mood.

**Requirements:**

-   Use the useState hook to track the current mood.
-   Pass the current mood as a prop from the parent to the MoodDisplay component.
-   Clicking different mood buttons should update the display with the correct mood and emoji.

Use this object with emojis:

```js
const moodEmojiMap = {
    Happy: "😊",
    Sad: "😢",
    Excited: "🤩",
    Tired: "😴",
}
```

### Exercise 3: My Book Library

**Objective:**

Build a simple "Book Library" app using React that allows users to view a collection of books and filter them based on their availability.

**Instructions:**

You are provided with an array of books. Your task is to create two components: BookCard and BookLibrary. The app should have buttons to filter between viewing all books and only the available books.

**Requirements:**

1. **Components:**
    - `BookCard`: A functional component that displays the details of each book (title, author, genre, availability).
    - `BookLibrary`: The main component that holds the state for filtering and displays the list of BookCard components based on the selected filter.
2. **State Management:**
    - The `BookLibrary` component should manage the following state:
        - filter: A string that determines whether to show all books or only available books.
3. **Buttons and Filtering Logic:**
    - All Books: A button that, when clicked, sets the `filter` state to "all", showing all books in the library.
    - Available Books: A button that, when clicked, sets the `filter` state to "available", showing only books that are marked as available `(available: true)`.
4. **The given array:**

```js
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        available: true,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        available: false,
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Science Fiction",
        available: true,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        available: true,
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        available: false,
    },
]
```