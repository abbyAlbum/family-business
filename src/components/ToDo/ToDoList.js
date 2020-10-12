import React from "react";
import { connect } from "react-redux";
import { finishTodo } from "../../store/Actions/todoActions";

const TodoList = ({ todos, finishTodo }) => {
  console.log(todos);
  //TODO: Check if need to show only user's todos.
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              handleClick(todo, finishTodo);
            }}
          >
            {" "}
            {todo.content}{" "}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no Todo's left </p>
  );

  return <div className="todos collection">{todoList}</div>;
};

const handleClick = (todo, finishTodo) => {
  finishTodo(todo);
};

const mapDispatchToProps = (dispatch) => {
  return {
    finishTodo: (todo) => dispatch(finishTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
