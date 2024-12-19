import { useRef } from "react";
import "./ToDoInput.css";

const ToDo = ({ submitHanlder }) => {
  const count = useRef(0);
  const inputValue = useRef("");

  const addToList = () => {
    if (inputValue.current.value.trim().length < 1) return;

    count.current = count.current + 1;

    submitHanlder((prev) => [
      ...prev,
      {
        taskName: inputValue.current.value,
        id: count.current,
        isCompleted: false,
      },
    ]);
  };
  return (
    <form action="?">
      <input type="text" ref={inputValue} />
      <button type="button" onClick={addToList}>
        Add
      </button>
    </form>
  );
};

export default ToDo;
