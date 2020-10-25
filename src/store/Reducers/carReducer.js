const initState = {
  cars: [],
};

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CAR_LIST":
      return action.payload;

    case "ADD_CAR_DAY_SUCCESS":
      console.log("success in adding car day");
      return state;

    case "ADD_CAR_DAY_ERROR":
      console.log("error in adding car day");
      return state;
    case "RENEW_CAR_SUCCESS":
      console.log("cars deleted successfully");
      return state;
    case "RENEW_CAR_ERROR":
      console.log("error in deleting cars");
      return state;

    default:
      return state;
  }
};

export default carReducer;
