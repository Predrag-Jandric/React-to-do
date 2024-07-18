# React - To do list

# 🔗 [Live Preview](https://lustrous-heliotrope-47c3fb.netlify.app/)

![Design preview](public/preview.png)

---

## About 👋

The To-Do Task Manager is a simple and elegant application designed to help you manage your tasks efficiently. This project demonstrates the use of React to create a dynamic and interactive user interface for adding, displaying, and managing tasks. The focus is on React useState practice.

---

## Features 👨‍💻

-   **Add Tasks**: Easily add new tasks with a task name and description.

-   **Delete Tasks**: Remove tasks that are no longer needed.

-   **Dynamic Task Count**: The footer dynamically updates to show the number of tasks you have.

---

Explanation 🧠

1.  **App Component**: The main component that manages the state of the application. It holds the list of tasks and provides functions to add and delete tasks.

    -   Uses `useState` to manage the state for tasks, task name input, and task description input.
    -   Renders the `Form` component for task input and the `Footer` component for displaying the task count.
    -   Maps through the list of tasks to render each task using the `Item` component.
2.  **Form Component**: A controlled form component for adding new tasks.

    -   Takes `taskName`, `taskTextArea`, `setTaskName`, `setTaskTextArea`, and `handleSubmitForm` as props.
    -   Updates the state for task name and description inputs and calls the `handleSubmitForm` function on form submission.
3.  **Item Component**: Represents a single task item in the list.

    -   Takes `taskName`, `desc`, `handleDeleteItem`, and `id` as props.
    -   Displays the task name and description and includes a delete button that calls the `handleDeleteItem` function with the task ID.
4.  **Footer Component**: Displays the current number of tasks.

    -   Takes `tasks` as a prop and dynamically updates the task count message based on the number of tasks.

---

## Languages

- React: functions, conditionals, useState, components
- Styling: basic