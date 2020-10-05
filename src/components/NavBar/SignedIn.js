import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedIn.css";
import fire from "../../Config/fire";

const SignedIn = () => {
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then((window.location = "/"));
  };

  return (
    <ul className="right">
      <li>
        <NavLink to="/home" className=" large material-icons">
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/chats" className=" large material-icons">
          forum
        </NavLink>
      </li>
      <li>
        <NavLink to="/uploader" className=" large material-icons">
          people
        </NavLink>
      </li>

      <li>
        <NavLink to="/home" className=" btn btn-floating pink lighten-1 ">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
