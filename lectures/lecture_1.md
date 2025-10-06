# Lecture 1: Getting Started with React.js

![Alt Text](https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png "React Logo")

## Introduction to React.js

### What is React?

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that can update and render efficiently in response to data changes.

### Why Use React?

-   **Component-Based Architecture**: React encourages building reusable UI components, making the development process more modular and maintainable.
-   **Virtual DOM**: React uses a virtual DOM to improve performance by minimizing direct manipulations of the actual DOM.
-   **One-Way Data Binding**: Ensures that data flows in a single direction, making the application more predictable and easier to debug.
-   **Community and Ecosystem**: A large community and rich ecosystem of tools, libraries, and tutorials to support React development.

### Who Uses React?

Many leading companies use React to build their web applications, including:

-   Facebook
-   Instagram
-   Netflix
-   Airbnb
-   WhatsApp
-   Uber

### Definition of a Library

We say that React is a library and not a framework, but what exactly does a library means? A library is a set of pre-compiled routines, classes, functions, or resources that developers can include and call within their own software projects. Libraries provide a way to share and reuse code, promoting efficiency and consistency across applications.

**Characteristics of a Library**
Reusable Code: Libraries contain reusable components that can be utilized across multiple projects without modification.
Modularity: Libraries are typically modular, allowing developers to include only the parts they need.
Abstraction: Libraries provide abstractions, making complex tasks simpler by encapsulating detailed implementation.
API (Application Programming Interface): Libraries offer a defined API that specifies how the routines, functions, and classes within the library should be used.

**Benefits of Using Libraries**
Efficiency: Libraries save development time by providing pre-written and tested code.
Reliability: Libraries are often well-tested and maintained, reducing the likelihood of bugs.
Consistency: Using libraries ensures that common tasks are performed in a consistent manner across different projects.
Focus: Libraries allow developers to focus on the unique aspects of their applications rather than reinventing common functionalities.

**React is a library and not a framework**
React is a JavaScript library for building user interfaces. It provides components, state management, and a virtual DOM to efficiently update and render UI changes.

### Key Features of React as a Library:

**Component-Based Architecture:** React allows developers to build encapsulated components that manage their own state and compose them to make complex UIs.

**Virtual DOM:** React uses a virtual DOM to optimize updates and rendering, improving performance.
Reusable Components: React components can be reused across different parts of an application or even in different projects.

**Comparison with Frameworks**
While libraries provide specific functionality and can be included as needed, frameworks offer a more comprehensive solution, often dictating the architecture and flow of an application. A library is typically more lightweight and flexible, whereas a framework is more opinionated and integrated.

### What is a SPA?

A Single Page Application (SPA) is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach leads to faster, more seamless user experiences. React is often used to build SPAs due to its efficient update and rendering capabilities.

SPA stands for Single-Page Application. It is a web application or website that loads a single HTML page and dynamically updates the content as the user interacts with the application. This creates a more seamless and responsive experience for the user, as opposed to traditional multi-page applications

### What is NPM?

NPM (Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for Node.js, an open-source, cross-platform JavaScript runtime environment. NPM allows developers to:

Install Packages: Download and manage libraries and tools that can be used in your JavaScript projects.

Publish Packages: Share your own libraries and tools with the community.

Manage Dependencies: Track and manage the external libraries that your project depends on.

### Key Features of NPM:

Package Installation: Easily install and update third-party libraries.

Version Management: Specify and manage version dependencies to ensure compatibility.

Scripts: Automate common tasks such as building, testing, and deploying your application.

If you already have installed Node.js, then you have NPM by default.

## Setting Up React Development Environment with Vite

### Why Vite?

Vite is a build tool that provides a faster and leaner development experience for modern web projects. It offers:

-   **Instant Server Start**: No need to wait for the entire application to build before you can start developing.
-   **Hot Module Replacement (HMR)**: Changes are reflected instantly without requiring a full refresh.
-   **Optimized Build**: Uses Rollup under the hood to produce highly optimized production builds.

### Installing Vite

To set up a new React project with Vite, follow these steps:

1. **Install Node.js and npm**

Ensure that Node.js and npm are installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Create a New Vite Project**

Open your terminal and run the following command:

`npm create vite@latest my-react-app --template react`

`cd my-react-app`

3. **Install Dependencies**

Navigate to your project directory and install the dependencies:

`npm install`

4. **Start the Development Server**

Start the Vite Development Server:

`npm run dev`

Your new React app should now be running on http://localhost:5173.

### Project Structure, Components, JSX, and Styling

**Project Structure**

A typical Vite + React project structure looks like this:

```plaintext
my-react-app/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

Here’s an explanation of each file and folder in the my-react-app project structure:

## Folder and File Explanations

### `node_modules/`

This directory contains all the dependencies and modules installed via npm. It includes the packages required by your project, based on the `package.json` file.

### `public/`

This folder is used to serve static assets. Files placed here are accessible to the server and won't be processed by the build tool.

-   `vite.svg`: An example static asset provided by Vite. You can add other static files here, such as images or fonts, that need to be served as-is.

### `src/`

The source folder contains all the main application code.

-   `assets/`: A subdirectory for organizing images, fonts, and other asset files used by your application.
-   `App.jsx`: The main application component file where your app’s primary component is defined. This file typically contains the core UI structure and logic of your app.
-   `App.css`: The CSS file for styling the `App.jsx` component. It includes the styles specific to your main application component.
-   `index.css`: A global CSS file for defining general styles that apply to the entire application.
-   `main.jsx`: The entry point of your React application. It imports the `App` component and renders it to the DOM using `ReactDOM.createRoot`.

### `.gitignore`

This file specifies intentionally untracked files that Git should ignore. Typically includes directories like `node_modules/`, build outputs, and environment variables.

### `.eslintrc.cjs`

The configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It helps maintain code quality and consistency.

### `index.html`

The main HTML file for your application. Vite uses this file as the entry point to inject the JavaScript bundles. It typically contains a `<div id="root"></div>` element where your React application will be mounted.

### `package.json`

This file contains metadata about the project, including the project name, version, description, author, and the list of dependencies and scripts. It is essential for npm to install the correct dependencies and run various scripts defined in the project.

### `package-lock.json`

Automatically generated file that locks the versions of dependencies installed in your project. It ensures that the same versions of the dependencies are installed across different environments.

### `README.md`

A markdown file containing information about the project. It usually includes a project overview, installation instructions, usage, and other relevant documentation.

### `vite.config.js`

The configuration file for Vite. It contains settings and options for customizing the build and development process, such as defining aliases, plugins, and server settings.

This project structure organizes your React application into distinct sections, making it easier to manage and maintain. Each file and folder serves a specific purpose, from managing dependencies and configurations to defining the main application logic and styling.

### Components in React

Components are the building blocks of a React application. There are two main types of components:

1. **Class Components:** ES6 classes that extend React.Component.
2. **Functional Components:** Functions that return JSX.

Example of a Functional Component:

```jsx
import React from "react"

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>
}

export default Greeting
```

Example of a Class Component:

```jsx
import React, { Component } from "react"

class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>
    }
}

export default Greeting
```

**Important Note:**

React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

For example, `MyComponent`, instead of `myComponent`. This is a way for React to make distinction between regular functions and components in a file.

### What is JSX?

JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write elements inside JavaScript code, making it easier to create and manage UI components.

**Examples of JSX:**

Example 1.

`const element = <h1>Hello, world!</h1>;`

Example 2.

```
const name = "Dan";
const greeting = <p>Welcome, {name}!</p>;
```

Example 3.

```
function WelcomeMessage({ user }) {
  return <h2>Welcome, {user}!</h2>;
}
```

### Styling in React

There are several ways to style React components, including:

-   Inline CSS Styling
-   Pure CSS
-   CSS modules
-   CSS preprocessors
-   Tailwind CSS
-   CSS-in-JS
-   Component libraries

**Example of Pure CSS:**

1. Create a CSS file (Button.css):

```css
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}
```

2. Import and use the CSS file in your component:

```jsx
import React from "react"
import "./Button.css"

function Button() {
    return <button className="button">Click Me</button>
}

export default Button
```

### Summary

In this lecture, we covered the basics of what React is, why it is popular, and some of the companies using it. We also introduced the concept of Single Page Applications (SPAs) and demonstrated how to set up a React development environment using Vite. Finally, we discussed the fundamental concepts of components, JSX, NPM and different methods for styling React applications. In the next lecture, we will go deeper into building reusable components and how we pass data between them.

### Additional Resources

-   <a href="https://react.dev/learn/your-first-component" target="_blank" rel="noopener noreferrer">Your First Component</a>
-   <a href="https://react.dev/learn/importing-and-exporting-components" target="_blank" rel="noopener noreferrer">Importing and Exporting Components</a>
-   <a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank" rel="noopener noreferrer">Writing Markup with JSX</a>