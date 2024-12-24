import EditTaskComponent from "../TaskEdit/ToDoEdit";
import "./ToDoOutput.css";
import removeIcon from "../../assets/icons/remove-icon.svg";
import removeActiveIcone from "../../assets/icons/remove-red-icon.svg";
import emptyListImg from "../../assets/img/empty-list.svg";

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

  const bottomBorder = (last) => {
    return { borderBottom: last ? "none" : "1px solid var(--primaryCl)" };
  };

  return (
    <div className="list-container">
      {toDoList.length === 0 ? (
        <div className="empty-list">
          <img src={emptyListImg} alt="empty list" />
          <p>Empty...</p>
        </div>
      ) : (
        <ul>
          {toDoList.map((todoTask, i, arr) => {
            return (
              <li
                key={todoTask.id}
                dataset={todoTask.id}
                style={bottomBorder(arr.length - 1 === i)}
              >
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
                      <svg width="16px" height="14px" viewBox="0 0 14 12">
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
                    <i className="remove-icon">
                      <img src={removeIcon} alt="remove-icon" />
                    </i>
                    <i className="remove-active-icon">
                      <img src={removeActiveIcone} alt="remove-icon" />
                    </i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
