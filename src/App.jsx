import "./App.css";
import Start from "./components/start";
import Todos from "./components/todos";
import Info from "./components/info";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Start />} /> 
        <Route path="/1" element={<Todos />} />
        <Route path="/2" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
