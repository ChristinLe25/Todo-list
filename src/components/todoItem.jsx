import "./css/todoItem.css";

const TodoItem = ({ handleDelete, index, todo }) => {
  return (
    <div className="todo-card">
      <input className="checkbox" type="checkbox" label="My Value" />
      {todo}
      <button className="btn-delet-todo" onClick={() => handleDelete(index)}>Delete</button>
      </div>
  );
};

export default TodoItem;
