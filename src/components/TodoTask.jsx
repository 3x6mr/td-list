import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TodoForm";
import React from "react";

export default function TodoTask({ item, onToggleComplete, onDelete, onEdit }) {
  const handleToggleComplete = () => {
    onToggleComplete(item.id);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };
  const handleEdit = () => {
    onEdit(item.id);
  };
  return (
    <div className="task-container">
      <p
        className={item.complete ? "text done" : "text"}
        onClick={handleToggleComplete}
      >
        {item.text}
      </p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faTrash}
          className="trash"
          onClick={handleDelete}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="pen"
          onClick={handleEdit}
        />
      </div>
    </div>
  );
}
