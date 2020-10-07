import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import Todos from "./components/ToDo/Todos";
import DashBoard from "./components/DashBoard/dashboard";
import Calendar from "./components/Calendar/calendar";
import Uploader from "./components/Gallery/uploader";
import Chats from "./components/Chat/chats";
import SignIn from "./components/Authentication/SignIn";

class Home extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="Home">
          <NavBar />
          <Switch>
            {/*FIXME: This is temporary until Firebase is up so we can get the state from anywhere*/}
            <Route exact path="/home" component={ DashBoard } />
            <Route path="/calendar" component={ Calendar } />
            <Route path="/todos" component={ Todos } />
            <Route path="/uploader" component={ Uploader } />
            <Route path="/chats" component={ Chats } />
            <Route path="/signin" component={ SignIn } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
