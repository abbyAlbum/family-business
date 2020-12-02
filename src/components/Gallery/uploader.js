import React, { useState } from "react";
import { storage } from "../../Config/fire";
import { connect } from "react-redux";
import { addUrl } from "../../store/Actions/galleryActions";
import Gallerys from "./gallerys";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

function Uploader(props) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const { images, addUrl, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  console.log(images);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageType = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/jpg",
      ];
      if (validImageType.includes(fileType)) {
        setError("");
        setImage(file);
      } else {
        setError("Please select an image to upload");
      }
    } else {
      setError("Please select an image to upload");
    }
  };

  const handleUpdate = () => {
    if (image) {
      const uploadTask = storage.ref(`/images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          setError(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              addToDatabase(url);
            });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };

  const addToDatabase = (url) => {
    setUrl(url);
    console.log(url);
    setProgress(0);
    addUrl(url);
  };

  return (
    <div>
      <div>
        <br></br>
        <Gallerys images={images} />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpdate}> Upload </button>
      </div>
      <div style={{ height: "100px" }}>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.firestore.ordered.images ? state.firestore.ordered.images : [],
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUrl: (url) => dispatch(addUrl(url)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "images" }])
)(Uploader);
