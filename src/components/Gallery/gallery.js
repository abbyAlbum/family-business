import React, { useState } from "react";
import { connect } from "react-redux";
import "reactjs-popup/dist/index.css";

const Gallery = (images) => {
  const myImageList = images.images;
  console.log(myImageList);
  const showImages = myImageList.length ? (
    myImageList.map((images) => {
      return (
        <div className="collection-item" key={images.id}>
          <img src={images.url} alt="image" />
        </div>
      );
    })
  ) : (
    <p className="center"> No images in gallery </p>
  );

  return <div className="images collection">{showImages}</div>;
};

export default Gallery;
