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
import SignUp from "./components/Authentication/SignUp";
import Car from "./components/Car/car";
import PickDay from "./components/Car/PickDay";
import Cars from "./components/Car/ShowCarList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Home">
          <NavBar />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/todos" component={Todos} />
            <Route path="/uploader" component={Uploader} />
            <Route path="/chats" component={Chats} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/car" component={Car} />
            <Route path="/pickday" component={PickDay} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
