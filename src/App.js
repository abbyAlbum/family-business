import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import Todos from "./components/ToDo/Todos";
import DashBoard from "./components/DashBoard/dashboard";
import SiginIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";

class App extends Component {
  state = {
    name: "",
    lastName: "",
    family: "",
    userName: "",
    todos: [
      { id: 1, content: "make stuff up", exe: "eyal", private: "" },
      { id: 2, content: "buy things", exe: "family", private: "" },
    ],
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            {/*FIXME: This is temporary until Firebase is up so we can get the state from anywhere*/}
            <Route
              exact
              path="/"
              render={() => <DashBoard {...this.state} />}
            />
            <Route path="/todos" render={() => <Todos {...this.state} />} />
            <Route path="/SignIn" component={SiginIn} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
