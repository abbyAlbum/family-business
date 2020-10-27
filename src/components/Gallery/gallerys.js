import React, { useState } from "react";
import { connect } from "react-redux";
import "reactjs-popup/dist/index.css";
import Gallery from "react-grid-gallery";

const Gallerys = (images) => {
  const myImageList = images.images;
  console.log(myImageList);
  const showImages = myImageList.length ? (
    myImageList.map((images) => {
      const IMAGES = [
        {
          src: images.url,
          thumbnail: images.url,
          thumbnailWidth: 300,
          thumbnailHeight: 350,
        },
      ];

      return <Gallery images={IMAGES} />;
    })
  ) : (
    <p className="gallery"> No images in gallery </p>
  );

  return <div className="images collection">{showImages}</div>;
};

export default Gallerys;
