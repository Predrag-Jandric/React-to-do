export default function Item({ taskName, desc, handleDeleteItem, id }) {
    return (
      <li className="item">
        <h2>{taskName}</h2>
        <p>{desc}</p>
        <button onClick={() => handleDeleteItem(id)}>Delete</button>
      </li>
    );
  }