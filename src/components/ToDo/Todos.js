import React from "react";
import TodoList from "./ToDoList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import AddToDo from "./AddToDo";

const Todos = (props) => {
  const { todos, auth } = props;
  console.log(todos);

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="todo-screen center">
      <h1 className="center blue-text">Todo's</h1>
      <TodoList todos={todos} />

      <AddToDo />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.firestore.ordered.todos ? state.firestore.ordered.todos : [],
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos" }])
)(Todos);
