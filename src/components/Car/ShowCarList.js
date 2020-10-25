import React from "react";
import { connect } from "react-redux";

const ShowCarList = (cars) => {
  const showcarlist = cars.length ? (
    cars.map((car) => {
      return (
        <div className="collection-item" key={car.id}>
          <span>{car.day}</span>
        </div>
      );
    })
  ) : (
    <p className="center"> No one is using the car this week </p>
  );

  return <div className="cars collection">{showcarlist}</div>;
};

export default ShowCarList;
