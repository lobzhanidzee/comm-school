import EditTaskComponent from "../InputEdit/ToDoEdit";
import "./ToDoOutput.css";

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
    return { textDecoration: isActive ? "line-through" : "none" };
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
              <input
                type="checkbox"
                onChange={(event) => {
                  markDone(event, todoTask.id);
                }}
              />
              <p style={completedStyle(todoTask.isCompleted)}>
                {todoTask.taskName}
              </p>
              <EditTaskComponent taskId={todoTask.id} editTask={editTask} />
              <button
                type="button"
                onClick={() => {
                  removeFromList(todoTask.id);
                }}
                className="remove-task-btn"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
