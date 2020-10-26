import React, { useState } from "react";
import { connect } from "react-redux";
import { changeCar } from "../../store/Actions/carActions";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ShowCarList = (props) => {
  const [value, setValue] = useState("");

  const { car, changeCar } = props;

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (car) => {
    setValue("");
    changeCar(car, value);
  };

  const showcarlist = car.length ? (
    car.map((car) => {
      return (
        <div className="collection-item" key={car.id}>
          <span>
            {car.day} : {car.name}
          </span>
          <Popup trigger={<button> Change Name</button>}>
            <div>
              {" "}
              <input
                type="text"
                onChange={handleOnChange}
                value={value}
                placeholder="You text here"
              />
              <button onClick={() => handleClick(car)}>Submit</button>
            </div>
          </Popup>
        </div>
      );
    })
  ) : (
    <p className="center"> No one is using the car this week! </p>
  );

  return <div className="car collection">{showcarlist}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCar: (car, value) => dispatch(changeCar(car, value)),
  };
};

export default connect(null, mapDispatchToProps)(ShowCarList);
