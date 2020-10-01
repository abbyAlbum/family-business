import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedIn.css";

const SignedIn = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className=" large material-icons">
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/forum" className=" large material-icons">
          forum
        </NavLink>
      </li>
      <li>
        <NavLink to="/families" className=" large material-icons">
          people
        </NavLink>
      </li>

      <li>
        <NavLink to="/" className=" btn btn-floating pink lighten-1 ">
          NN
        </NavLink>
      </li>
      <li>
        <NavLink to="/app">Logout</NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
