import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => { 
    
    return (
        <header>
        <h1>Todo List</h1>
      <div >
        <Link className="link" to="/">Start</Link>
        <Link className="link" to="/1">Todos</Link>
        <Link className="link" to="/2">Info</Link>
      </div>
    </header>
  );
};

export default Header;