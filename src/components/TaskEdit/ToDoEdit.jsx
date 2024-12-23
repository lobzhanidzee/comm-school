import { useState } from "react";
import "./ToDoEdit.css";
import editIcon from "../../assets/icons/edit-icon.svg";

const EditTaskComponent = ({ taskId, editTask }) => {
  const [editInput, setEditInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const showEdit = () => {
    setIsEditing(!isEditing);
  };

  const updateInputHandler = () => {
    editTask(taskId, editInput);
    showEdit();
  };

  return isEditing ? (
    <>
      <input
        type="text"
        value={editInput}
        onChange={(event) => setEditInput(event.target.value)}
      />
      <button onClick={updateInputHandler} className="confirm-task-btn">
        Confirm
      </button>
    </>
  ) : (
    <button onClick={showEdit} className="edit-task-btn">
      <img src={editIcon} alt="edit-icon" />
    </button>
  );
};

export default EditTaskComponent;
