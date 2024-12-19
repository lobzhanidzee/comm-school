import React, { useRef, useState } from "react";
import "./App.css";
import ToDo from "./components/Input/ToDoInput";
import ToDoList from "./components/InputOutput/ToDoOutput";

function App() {
  // todo taskebis listi
  const [toDo, setToDo] = useState([]);

  return (
    <div className="todo-container">
      <ToDo submitHanlder={setToDo} />
      <ToDoList toDoList={toDo} changeHandler={setToDo} />
    </div>
  );
}

export default App;
