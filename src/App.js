import React, { useState } from "react";
import "./App.css";
import ToDo from "./components/Input/ToDoInput";
import ToDoList from "./components/TaskList/ToDoOutput";

function App() {
  // Todo Tasks list
  const [toDo, setToDo] = useState([]);

  return (
    <div className="todo-container">
      <h1>TODO APP</h1>
      <ToDo submitHanlder={setToDo} />
      <ToDoList toDoList={toDo} changeHandler={setToDo} />
    </div>
  );
}

export default App;
