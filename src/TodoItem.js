import React, { memo, useState } from "react";
import { TiPencil } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import "./App.css";

const TodoItem = (props) => {
  const { todoData, deleteTodd, modifyTodo, updateTodoItem } = props;
  const [updateTodo, setUpdatedTodd] = useState(todoData.todo);

  const handleDelete = () => {
    deleteTodd(todoData.id);
  };

  const handleModify = () => {
    modifyTodo(todoData.id);
  };

  const handleUpdate = () => {
    updateTodoItem(todoData.id, updateTodo)
  };

  return (
    <div className="todoitem-container">
      {todoData.modify ? (
        <>
          <input
            type="text"
            value={updateTodo}
            onChange={(e) => setUpdatedTodd(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <h3>{`${todoData.todo} (Updated ${todoData.count} Times)`}</h3>
          <div>
            <button onClick={handleModify}>
              <TiPencil className="todo-icon" style={{ color: "white" }} />
            </button>
            <button onClick={handleDelete}>
              <RxCross2 className="todo-icon" style={{ color: "red" }} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(TodoItem);
