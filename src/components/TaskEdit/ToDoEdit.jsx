import { useState } from "react";
import "./ToDoEdit.css";
import editIcon from "../../assets/icons/edit-icon.svg";
import editActiveIcon from "../../assets/icons/edit-purple-icon.svg";

const EditTaskComponent = ({ taskId, editTask }) => {
  const [editInput, setEditInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const showEdit = () => {
    setIsEditing(!isEditing);
  };

  const updateEditInput = (e) => {
    if (e.target.value.length < 35) {
      setEditInput(e.target.value);
    }
  };

  const updateInputHandler = (e) => {
    if (editInput.length <= 35) {
      editTask(taskId, editInput);
      showEdit();
    }
  };

  return isEditing ? (
    <>
      <div className="edit-modal">
        <h2>Edit Task</h2>
        <div>
          <input
            type="text"
            value={editInput}
            onChange={updateEditInput}
            placeholder="Enter edited task"
          />
          <div className="modal-btns">
            <button onClick={showEdit} className="cancel-edit-btn">
              Cancel
            </button>
            <button onClick={updateInputHandler} className="confirm-edit-btn">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="overflow" onClick={showEdit}></div>
    </>
  ) : (
    <button onClick={showEdit} className="edit-task-btn">
      <i className="edit-icon">
        <img src={editIcon} alt="edit-icon" />
      </i>
      <i className="edit-active-icon">
        <img src={editActiveIcon} alt="edit-icon" />
      </i>
    </button>
  );
};

export default EditTaskComponent;
