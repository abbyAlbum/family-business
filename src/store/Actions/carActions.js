export const addCarDay = (day, name, time) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("car")
      .add({
        day: day,
        name: name,
        time: time,
      })
      .then(() => {
        dispatch({ type: "ADD_CAR_DAY_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_CAR_DAY_ERROR", err });
      });
  };
};
