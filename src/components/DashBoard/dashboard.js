import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import TodoList from "../ToDo/ToDoList";
import calendar from "../Calendar/calendar";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {

    const { auth, todos } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 l4">
            <NavLink to="/todos">
              <h3 className="center blue-text darken-5">Todo's</h3>
            </NavLink>
            <TodoList todos={ todos } />
          </div>
          <div className="col s20 m6 l4">
            <NavLink to="/Calendar">
              <h3 className="right blue-text darken-5">Calendar</h3>
            </NavLink>
          </div>
          <div className="col s20 m6 l4">
            <NavLink to="/uploader">
              <h3 className="right blue-text darken-5">Gallery</h3>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    // todos: state.firestore.ordered.todos,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'todos'}
  ])
)(Dashboard);
