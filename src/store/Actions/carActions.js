//var i = true;

export const addCarDay = (day, name) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    var i = await fetchDay(day, firestore);
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

const fetchDay = async (days, firestore) => {
  var flag = await firestore
    .collection("car")
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        var flag = true;
        querySnapshot.forEach((doc) => {
          if (days === doc.data().day) flag = false;
        });
        return flag;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return flag;
};
