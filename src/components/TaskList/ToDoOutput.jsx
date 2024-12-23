import EditTaskComponent from "../TaskEdit/ToDoEdit";
import "./ToDoOutput.css";
import removeIcon from "../../assets/icons/remove-icon.svg";

const ToDoList = ({ toDoList, changeHandler }) => {
  const markDone = (event, id) => {
    changeHandler((prev) => {
      return prev.map((task) => {
        if (task.id == id)
          return { ...task, isCompleted: event.target.checked };
        return task;
      });
    });
  };

  const removeFromList = (id) => {
    changeHandler((prev) => prev.filter((task) => task.id != id));
  };

  const completedStyle = (isActive) => {
    return {
      textDecoration: isActive ? "line-through" : "none",
      color: isActive ? "var(--completedCl)" : "black",
    };
  };

  const editTask = (id, title) => {
    if (title.trim().length < 1) return;

    const newList = toDoList.map((task) => {
      if (task.id == id) return { ...task, taskName: title };
      return task;
    });

    changeHandler(newList);
  };

  return (
    <div className="list-container">
      <ul>
        {toDoList.map((todoTask) => {
          return (
            <li key={todoTask.id} dataset={todoTask.id}>
              <div className="checkbox-wrapper">
                <input
                  className="inp-cbx"
                  id={"task" + todoTask.id}
                  type="checkbox"
                  onChange={(event) => {
                    markDone(event, todoTask.id);
                  }}
                />
                <label className="cbx" htmlFor={"task" + todoTask.id}>
                  <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span style={completedStyle(todoTask.isCompleted)}>
                    {todoTask.taskName}
                  </span>
                </label>
              </div>
              <div className="task-btns">
                <EditTaskComponent taskId={todoTask.id} editTask={editTask} />
                <button
                  type="button"
                  onClick={() => {
                    removeFromList(todoTask.id);
                  }}
                  className="remove-task-btn"
                >
                  <img src={removeIcon} alt="remove-icon" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
