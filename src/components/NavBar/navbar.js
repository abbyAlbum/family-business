import React from "react";
import { Link, NavLink } from "react-router-dom";
import SignedIn from "./SignedIn";
import fire from "../../Config/fire";
import "./navbar.css";

const NavBar = () => {
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then((window.location = "/"));
  };

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <button
          onClick={handleLogout}
          class="btn btn-info btn-lg"
          type="submit"
          name="action"
          margin-top="8px"
        >
          Logout
        </button>

        <Link to="/DashBoard" className="brand-logo">
          Family Business
        </Link>

        <SignedIn />
      </div>
    </nav>
  );
};

export default NavBar;
