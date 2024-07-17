export default function Footer({ tasks }) {
  const taskNum =
    tasks.length === 0
      ? "You have no tasks"
      : tasks.length === 1
      ? "You have one task"
      : `You have ${tasks.length} tasks`;

  return (
    <div>
      <p>{taskNum}</p>
    </div>
  );
}
