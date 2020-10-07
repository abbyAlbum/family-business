import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut"
import "./navbar.css";

const NavBar = (props) => {

  const { auth, profile } = props;
  const links = auth.uid ? <SignedIn profile={ profile } /> : <SignedOut />

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">Family Business</NavLink>
        { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar);
