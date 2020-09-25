import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TodoList from "../ToDo/ToDoList";
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
        </div>
      </div>
    );
  }
}

export default Dashboard;
