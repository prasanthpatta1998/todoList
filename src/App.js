import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoArray = todo.split(" ");
    const number = parseInt(todoArray[todoArray.length - 1]);
    if (!isNaN(number)) {
      const todosList = [];
      for (let i = 0; i < number; i++) {
        todosList.push({
          id: uuid(),
          todo: todoArray.slice(0, todoArray.length - 1).join(" "),
          count: 0,
          modify: false,
        });
      }
      setTodo("");
      setListOfTodos([...listOfTodos, ...todosList]);
    } else {
      alert("Please give a valid todo");
    }
  };

  const modifyTodo = (id) => {
    const newList = listOfTodos.map((eachTodo) => {
      if (eachTodo.id === id) {
        return { ...eachTodo, modify: true };
      }
      return eachTodo;
    });
    setListOfTodos([...newList]);
  };

  const deleteTodd = (id) => {
    const filteredData = listOfTodos.filter((eachTodo) => eachTodo.id !== id);
    setListOfTodos([...filteredData]);
  };

  const updateTodoItem = (id, modfiedValue) => {
    const filteredItem = listOfTodos.find(eachTodo => eachTodo.id === id)
    console.log(filteredItem)
    const newList = listOfTodos.map((eachTodo) => {
      if (eachTodo.id === id) {
        return { ...eachTodo, todo: modfiedValue, count: filteredItem.count + 1, modify: false };
      }
      return eachTodo;
    });
    setListOfTodos([...newList]);
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <h1>Day Goals!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
        <div>
          {listOfTodos.map((eachTodo) => (
            <TodoItem
              key={eachTodo.id}
              todoData={eachTodo}
              modifyTodo={modifyTodo}
              deleteTodd={deleteTodd}
              updateTodoItem={updateTodoItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
