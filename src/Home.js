import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import Todos from "./components/ToDo/Todos";
import DashBoard from "./components/DashBoard/dashboard";
import Calendar from "./components/Calendar/calendar";
import App from "./App";
import Uploader from "./components/Gallery/uploader";

class Home extends Component {
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
            <Route path="/uploader" component={Uploader} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
