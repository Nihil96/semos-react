## Homework 3

### Exercise 1: Build a Family Tree with Props

Objective:

1. Create a simple Family Tree that displays a parent's name and passes down information about children and grandchildren through props.
   Instructions:
2. Create a Parent component that will display:
   The parent's name.
   It will also pass information about its children to the Child component.
3. Create a Child component that will:
   Display the child's name and age.
   Receive and pass down information about its own children (grandchildren) to the Grandchild component.
4. Create a Grandchild component that will:
   Display the grandchild's name and favorite hobby.
5. Pass props from the Parent component down to the Child and then from Child to Grandchild.
   Render the Parent component in App.jsx, and ensure the family tree information is passed down to the grandchildren. Here is the family object:

```js
const family = {
  name: "John (Parent)",
  children: [
    {
      name: "Alex (Child)",
      age: 30,
      grandchildren: [
        { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
        { name: "Sophia (Grandchild)", hobby: "Drawing" },
      ],
    },
    {
      name: "Emma (Child)",
      age: 28,
      grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
    },
  ],
}
```

### Exercise 2: Mood Tracker

Objective:

Create a Mood Tracker app where the user can select their current mood from a set of buttons. The app should display the selected mood and a corresponding emoji.

Components:

1. MoodSelector:
   Contains buttons for different moods (e.g., Happy, Sad, Excited, Tired).
   When a button is clicked, it updates the current mood in the parent component using useState.

2. MoodDisplay:
   Receives the current mood as a prop and displays the mood text and an emoji that represents the mood.

Requirements:

- Use the useState hook to track the current mood.
- Pass the current mood as a prop from the parent to the MoodDisplay component.
- Clicking different mood buttons should update the display with the correct mood and emoji.

Use this object with emojis:

```js
const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
}
```
