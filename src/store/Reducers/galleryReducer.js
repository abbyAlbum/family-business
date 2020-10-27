const initState = {
  images: [],
};

const galleryReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_IMAGES_LIST":
      return action.payload;

    case "ADD_IMAGE_SUCCESS":
      console.log("success in adding image");
      return state;

    case "ADD_IMAGE_ERROR":
      console.log("error in adding image");
      return state;

    default:
      return state;
  }
};

export default galleryReducer;
