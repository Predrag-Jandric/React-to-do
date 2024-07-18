export default function Form({
  taskName,
  setTaskName,
  taskTextArea,
  setTaskTextArea,
  handleSubmitForm,
}) {
  return (
    <form className="form" onSubmit={handleSubmitForm}>
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
