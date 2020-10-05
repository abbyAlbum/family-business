import React from "react";
import TodoList from "./ToDoList";
import { connect } from 'react-redux'

const Todos = (props) => {
  return (
    <div className="todo-screen center">
      <h1 className="center blue-text">Todo's</h1>
      <TodoList todos={props.todos} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps)(Todos);
