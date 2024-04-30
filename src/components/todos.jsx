import { useState } from "react";
import "./css/todos.css";
import TodoItem from "./todoItem";

const Todos = () => {
  const [showVal, setShowVal] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const change = (event) => {
    setInputVal(event.target.value);
  };

  const handelSumit = (event) => {
    event.preventDefault();
    setShowVal([...showVal, inputVal]);
    setInputVal("");
  };

  const handleDelete = (index) => {
    const newTodos = [...showVal];
    newTodos.splice(index, 1);
    setShowVal(newTodos);
  };

  return (
    <div className="todo-bacrund" >
      <form  onSubmit={handelSumit}>
        <p className="explaning-text">Skriv din Todo:</p>
        <div className="center">
        <input className="input-todos" onChange={change} value={inputVal} />
        <button className="btn-add" type="submit">Add</button>
        </div>
      </form>
      <ul>
        {showVal.map((todo, index) => (
          <li  key={index}>
            <TodoItem handleDelete={handleDelete} todo={todo} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
