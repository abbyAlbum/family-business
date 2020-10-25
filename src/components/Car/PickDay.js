import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { addCarDay } from "../../store/Actions/carActions";
import { Link } from "react-router-dom";

function PickDay(props) {
  const [value, setValue] = useState("");
  const { handleClose, addCarDay } = props;
  var i = "";

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddDay = (day) => {
    setValue("");
    i = day;
    console.log(i);
    addCarDay(day, value);
  };

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          <h1 className="center blue-text"> Pick Your Car Day</h1>
          <input
            type="text"
            onChange={handleOnChange}
            value={value}
            placeholder="Input your name here"
          />
          <button onClick={() => handleAddDay("Sunday")}>Sunday</button>
          <button onClick={() => handleAddDay("Monday")}>Monday</button>
          <button onClick={() => handleAddDay("Tuesday")}>Tuesday</button>
          <button onClick={() => handleAddDay("Wednesday")}>Wednesday</button>
          <button onClick={() => handleAddDay("Thursday")}>Thursday</button>
          <button onClick={() => handleAddDay("Friday")}>Friday</button>
          <button onClick={() => handleAddDay("Saturday")}>
            Saturday
          </button>{" "}
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCarDay: (day, value) => dispatch(addCarDay(day, value)),
  };
};

export default connect(null, mapDispatchToProps)(PickDay);
