import React, { useRef, useState } from "react";
import TodoTask from "./TodoTask";

export default function TodoWrapper() {
  const [counter, setCounter] = useState(0);
  const updRef = useRef();
  const [list, setList] = useState([]);
  const inpRef = useRef();

  const handleClick = () => {
    if (inpRef.current.value) {
      setList([
        ...list,
        {
          id: counter,
          complete: false,
          text: inpRef.current.value,
          isEditing: false,
        },
      ]);
      inpRef.current.value = "";
      setCounter(counter + 1);
    }
  };
  const handleToggleComplete = (taskId) => {
    setList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  };
  const handleClickDelete = (taskId) => {
    setList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const handleEdit = (taskId) => {
    setList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isEditing: true } : task
      )
    );
  };
  const handleUpdate = (taskId) => {
    setList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, text: updRef.current.value, isEditing: false }
          : task
      )
    );
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  const handleKeyPress2 = (event, taskid) => {
    if (event.key === "Enter") {
      handleUpdate(taskid);
    }
  };

  return (
    <div className="wrapper-container">
      {list.map((item) =>
        item.isEditing ? (
          <div className="todo-form" key={item.id}>
            <input
              ref={updRef}
              type="text"
              className="input-field"
              defaultValue={item.text}
              onKeyDown={() => handleKeyPress2(item.id)}
            />
            <button className="btn" onClick={() => handleUpdate(item.id)}>
              Update
            </button>
          </div>
        ) : (
          <TodoTask
            key={item.id}
            item={item}
            onToggleComplete={handleToggleComplete}
            onDelete={handleClickDelete}
            onEdit={handleEdit}
          />
        )
      )}

      <div className="todo-form">
        <input
          ref={inpRef}
          type="text"
          className="input-field"
          placeholder="Add a new task .."
          onKeyDown={handleKeyPress}
        />
        <button className="btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
}
