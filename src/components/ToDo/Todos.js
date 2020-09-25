import React from "react";
import TodoList from "./ToDoList";

const Todos = (props) => {
  console.log(props);
  return (
    <div className="todo-screen center">
      <h1 className="center blue-text">Todo's</h1>
      <TodoList todos={props.todos} />
    </div>
  );
};

export default Todos;
