import { useRef, useState } from "react";
import "./ToDoInput.css";
import plusIcon from "../../assets/icons/plus-icon.svg";
import darkThemeIcon from "../../assets/icons/dark-theme-icon.svg";
import lightThemeIcon from "../../assets/icons/light-theme-icon.svg";

const ToDo = ({ submitHanlder }) => {
  const count = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState("dark-theme");

  const addToList = () => {
    if (inputValue.trim().length < 1) return;

    count.current = count.current + 1;

    submitHanlder((prev) => [
      ...prev,
      {
        taskName: inputValue,
        id: count.current,
        isCompleted: false,
      },
    ]);

    setInputValue("");
  };

  const handleChange = (e) => {
    if (e.target.value.length <= 35) {
      setInputValue(e.target.value);
    }
  };

  const changeTheme = (e) => {
    const body = document.querySelector("body");
    const imgElement = e.currentTarget.querySelector("img");

    if (imgElement.alt === "switch-to-dark-icon") {
      imgElement.src = lightThemeIcon;
      imgElement.alt = "switch-to-light-icon";
      setTheme("dark-theme");
    } else {
      imgElement.src = darkThemeIcon;
      imgElement.alt = "switch-to-dark-icon";
    }
    body.classList.toggle(theme);
  };

  return (
    <div className="add-task-container">
      <form action="?">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter the task"
        />
        <button type="button" onClick={addToList}>
          <img src={plusIcon} alt="plus-icon" />
        </button>
      </form>
      <button onClick={changeTheme}>
        <img src={darkThemeIcon} alt="switch-to-dark-icon" />
      </button>
    </div>
  );
};

export default ToDo;
