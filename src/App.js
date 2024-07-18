import { useState } from "react";
import Item from "./componets/Item";
import Form from "./componets/Form";
import Footer from "./componets/Footer";

const initialTasks = [
  { taskName: "Do laundry", desc: "Go to the bathroom and do it", id: 645769 },
  // {
  //   taskName: "Dry clothes",
  //   desc: "put the clothes into the drying machine",
  //   id: 5345126,
  // },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [taskTextArea, setTaskTextArea] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!taskName || !taskTextArea) return;

    const newTask = {
      taskName: taskName,
      desc: taskTextArea,
      id: Date.now(),
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskName("");
    setTaskTextArea("");
  }

  function handleDeleteItem(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>To do task</h1>
      <Form
        taskName={taskName}
        taskTextArea={taskTextArea}
        handleSubmitForm={handleSubmitForm}
        setTaskName={setTaskName}
        setTaskTextArea={setTaskTextArea}
      />
      <ul className="task-list">
        {tasks.map((task) => (
          <Item
            taskName={task.taskName}
            desc={task.desc}
            key={task.id}
            handleDeleteItem={handleDeleteItem}
            id={task.id}
          />
        ))}
      </ul>
      <Footer tasks={tasks} />
    </div>
  );
}

// tasks
// 1. Make local storage
// 2. Use a Single State for Form Inputs
