import React from "react";
import { Link, NavLink } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/DashBoard" className="brand-logo">
          Family Business
        </Link>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  );
};

export default NavBar;
