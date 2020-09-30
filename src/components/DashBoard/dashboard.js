import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TodoList from "../ToDo/ToDoList";
import Calendar from "../Calendar/calendar";
import Todos from "../ToDo/Todos";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 l4">
            <NavLink to="/todos">
              <h3 className="center blue-text darken-5">Todo's</h3>
            </NavLink>
            <TodoList todos={this.props.todos} />
          </div>
          <div className="col s20 m6 l4">
            <NavLink to="/Calendar">
              <h3 className="right blue-text darken-5">Calendar</h3>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
