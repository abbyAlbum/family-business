import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Pickday from "./PickDay";
import ShowCarList from "./ShowCarList";
import { Redirect } from "react-router-dom";

const Car = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cars, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="todo-screen center">
      <h1 className="center blue-text">It's my turn!</h1>
      <ShowCarList cars={cars} />
      <input type="button" value="Click to Open Popup" onClick={togglePopup} />

      {isOpen && <Pickday handleClose={togglePopup} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.firestore.ordered.cars ? state.firestore.ordered.cars : [],
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "car" }])
)(Car);
