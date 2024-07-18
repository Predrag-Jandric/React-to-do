export default function Footer({ tasks }) {
  const taskNum =
    tasks.length === 0
      ? "You have no tasks"
      : tasks.length === 1
      ? "You have 1 task"
      : `You have ${tasks.length} tasks`;

  return (
    <div className="footer">
      <p>{taskNum}</p>
    </div>
  );
}
