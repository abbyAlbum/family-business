import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { addCarDay } from "../../store/Actions/carActions";
import { Link } from "react-router-dom";

function PickDay({ addCarDay }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = (day) => {
    setValue("");
    addCarDay(day, value);
  };

  return (
    <>
      <h1 className="center blue-text"> Pick Your Car Day</h1>
      <input
        type="text"
        onChange={handleOnChange}
        value={value}
        placeholder="Input your name here"
      />
      <button onClick={() => handleAdd("Sunday")}>Sunday</button>
      <button onClick={() => handleAdd("Monday")}>Monday</button>
      <button onClick={() => handleAdd("Tuesday")}>Tuesday</button>
      <button onClick={() => handleAdd("Wednesday")}>Wednesday</button>
      <button onClick={() => handleAdd("Thursday")}>Thursday</button>
      <button onClick={() => handleAdd("Friday")}>Friday</button>
      <button onClick={() => handleAdd("Saturday")}>Saturday</button> <br></br>
      <br></br>
      <Link to="/car">
        <button>I've chosen my turn!</button>
      </Link>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCarDay: (day, value) => dispatch(addCarDay(day, value)),
  };
};

export default connect(null, mapDispatchToProps)(PickDay);
