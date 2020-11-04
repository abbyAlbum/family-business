import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Pickday from "./PickDay";
import ShowCarList from "./ShowCarList";
import { Redirect } from "react-router-dom";
import Countdown from "react-countdown";
import moment from "moment";
import Timer from "./timer";
import { renewCar } from "../../store/Actions/carActions";

const Car = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { car, auth, renewCar } = props;
 

  if (!auth.uid) return <Redirect to="/signin" />;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const Completionist = () => {
    renewCar();
    window.location.reload(false);
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="todo-screen center">
      <h1 className="center blue-text">It's my turn!</h1>
      <ShowCarList car={car} />
      <input type="button" value="Pick Your Car Day" onClick={togglePopup} />

      {isOpen && <Pickday handleClose={togglePopup} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.firestore.ordered.car ? state.firestore.ordered.car : [],
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    renewCar: () => dispatch(renewCar()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "car" }])
)(Car);
