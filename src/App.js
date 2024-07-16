import { useState } from "react";

const initialTasks = [
  { taskName: "Do laundry", desc: "go to the bathroom and do it", id: 645769 },
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
      <main>
        {tasks.map((task) => (
          <Item
            taskName={task.taskName}
            desc={task.desc}
            key={task.id}
            handleDeleteItem={handleDeleteItem}
            id={task.id}
          />
        ))}
      </main>
    </div>
  );
}

function Item({ taskName, desc, handleDeleteItem, id }) {
  return (
    <div className="item">
      <h2>{taskName}</h2>
      <p>{desc}</p>
      <button onClick={() => handleDeleteItem(id)}>Delete</button>
    </div>
  );
}

function Form({
  taskName,
  setTaskName,
  taskTextArea,
  setTaskTextArea,
  handleSubmitForm,
}) {
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={taskName}
        placeholder="Task name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        type="text"
        value={taskTextArea}
        placeholder="Task description"
        onChange={(e) => setTaskTextArea(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

// tasks
// 1. Make local storage
// 2. Use a Single State for Form Inputs
// 3. Extract Components to Separate Files
