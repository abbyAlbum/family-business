import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBaGdIEa5gAbBkBWnYPmuh2GaEc_ThHlb0",
  authDomain: "family-business-9d56f.firebaseapp.com",
  databaseURL: "https://family-business-9d56f.firebaseio.com",
  projectId: "family-business-9d56f",
  storageBucket: "family-business-9d56f.appspot.com",
  messagingSenderId: "208261225997",
  appId: "1:208261225997:web:d42a9df98ee87298feff44",
  measurementId: "G-XQSKZ8HV8Q",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
