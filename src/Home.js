import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import Todos from "./components/ToDo/Todos";
import DashBoard from "./components/DashBoard/dashboard";
import Calendar from "./components/Calendar/calendar";
import App from "./App";
import Login from "./components/Authentication/Login";

class Home extends Component {
  constrcutor() {
    this.handleLogout = this.handleLogout.bind(this);
  }
  state = {
    todos: [
      { id: 1, content: "make stuff up", exe: "eyal", private: "" },
      { id: 2, content: "buy things", exe: "family", private: "" },
    ],
  };

  render() {
    return (
      <BrowserRouter>
        <div className="Home">
          <NavBar />
          <Switch>
            {/*FIXME: This is temporary until Firebase is up so we can get the state from anywhere*/}
            <Route
              exact
              path="/"
              render={() => <DashBoard {...this.state} />}
            />
            <Route path="/calendar" component={Calendar} />
            <Route path="/todos" render={() => <Todos {...this.state} />} />
            <Route path="/Logout" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
