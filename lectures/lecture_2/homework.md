## Homework 2

### Exercise 1: Create a Class-based and a Functional Component

1. Create a Class-based Component:

    - Create a new file named **UserProfileClass.jsx** in the `src/components` folder.
    - Create a class-based component named **UserProfileClass** that takes props to display a user's `name`, `age`, and `hobby`.
    - The component should display the props in a styled card format.

2. Create a Functional Component:

    - Create another file named **UserProfileFunction.jsx** in the `src/components` folder.
    - Create a functional component named **UserProfileFunction** that takes props to display a user's `name`, `age`, and `hobby` in a similar format as the class-based component.

3. Update the **App.jsx** to Use Both Components:

    - Import both components into **App.jsx**.
    - Pass the same props to both components and render them side by side to compare their outputs.

### Exercise 2: Dynamic List Rendering with Props

The following array of objects is given below:

```js
const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
]
```

Create a new `ListItem` component that will accept props `items' and will display the items from above in an unordered list. Also make a component for each item and use some basic CSS styling.

### Exercise 3: Build a Family Tree with Props

#### Objective:

Create a simple Family Tree that displays a parent's name and passes down information about children and grandchildren through props.

**Instructions:**

1. Create a **Parent** component that will display:

    - The parent's name.
    - It will also pass information about its children to the **Child** component.

2. Create a **Child** component that will:

    - Display the child's name and age.
    - Receive and pass down information about its own children (grandchildren) to the **Grandchild** component.

3. Create a **Grandchild** component that will:
    - Display the grandchild's name and favorite hobby.
4. Pass props from the **Parent** component down to the **Child** and then from **Child** to **Grandchild**.
5. Render the **Parent** component in **App.jsx**, and ensure the family tree information is passed down to the grandchildren. Here is the family object:

Use the following object to create the family tree:

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