import React from "react";

const TodoList = ({ todos }) => {
  console.log(todos);
  //TODO: Check if need to show only user's todos.
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span> {todo.content} </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no Todo's left </p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default TodoList;
