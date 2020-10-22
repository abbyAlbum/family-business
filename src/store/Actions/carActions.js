var i = true;

export const addCarDay = (day, name) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    fetchDay(day, firestore);
    if (i) {
      firestore
        .collection("car")
        .add({
          day: day,
          name: name,
          time: "",
        })
        .then(() => {
          dispatch({ type: "ADD_CAR_DAY_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "ADD_CAR_DAY_ERROR", err });
        });
    }
  };
};

async function fetchDay(days, firestore) {
  firestore
    .collection("car")
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log(doc.data().day);
          if (days === doc.data().day) {
            console.log(days);
            var i = false;

            console.log(i);
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
