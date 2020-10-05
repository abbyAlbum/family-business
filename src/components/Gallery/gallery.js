import { storage } from "../../Config/fire";
import React, { useState } from "react";

export default function Gallery() {
  const [url, setUrl] = useState("");

  var storageRef = storage().ref("images/");
  var starsRef = storageRef.child("images/IMG_0001.JPG");
  starsRef
    .getDownloadURL()
    .then(function (url) {
      setUrl(url);
    })
    .catch(function (error) {
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break;

        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;

        case "storage/canceled":
          // User canceled the upload
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break;
      }
    });

  return (
    <div>
      {" "}
      <img src={url} />
    </div>
  );
}
