export const addUrl = (url) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("images")
      .add({
        url: url,
      })
      .then(() => {
        dispatch({ type: "ADD_IMAGE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_IMAGE_ERROR", err });
      });
  };
};
