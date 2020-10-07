import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedIn.css";
import { signOut } from '../../store/Actions/authActions';
import { connect } from 'react-redux';

const SignedIn = (props) => {

  const { signOut, profile } = props;

  return (
    <ul className="right">
      <li><NavLink to="/" className=" large material-icons">home</NavLink></li>

      <li><NavLink to="/chats" className=" large material-icons">forum</NavLink></li>

      <li><NavLink to="/uploader" className=" large material-icons">people</NavLink></li>

      <li><a onClick={ signOut }>Log Out</a></li>

      <li><NavLink to="/" className=" btn btn-floating pink lighten-1 ">{ profile.initials }</NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedIn);
