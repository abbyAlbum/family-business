import React from "react";
import { connect } from "react-redux";
import { finishTodo, deleteTodo } from "../../store/Actions/todoActions";

const TodoList = (props) => {
  const { todos, finishTodo, deleteTodo } = props;

  //TODO: Check if need to show only user's todos.
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => { handleClick(todo, finishTodo); }} > {todo.content} </span>
          <button className="right" onClick={() => { handleClick(todo, deleteTodo); }} > {" "} Delete todo{" "} </button>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no Todo's left </p>
  );

  return <div className="todos collection">{todoList}</div>;
};

const handleClick = (todo, todoAction) => {
  todoAction(todo);
};

const mapDispatchToProps = (dispatch) => {
  return {
    finishTodo: (todo) => dispatch(finishTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
