import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import Todos from "./components/ToDo/Todos";
import DashBoard from "./components/DashBoard/dashboard";
import Calendar from "./components/Calendar/calendar";
import Uploader from "./components/Gallery/uploader";
import Chats from "./components/Chat/chats";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
// import { firebase } from "./Config/fire";
// import Home from "./Home";
// import Login from "./components/Authentication/Login";

// const App = () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };

//   const handleLogin = () => {
//     clearErrors();
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case "auth/user-not-found":
//             setEmailError(err.message);
//             break;
//           case "auth/wrong-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const handleSignUp = () => {
//     clearErrors();
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/email-already-in-use":
//           case "auth/invalid-email":
//             setEmailError(err.message);
//             break;
//           case "authauth/weak-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const authListener = () => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs();
//         setUser(user);
//       } else {
//         setUser("");
//       }
//     });
//   };

//   useEffect(() => {
//     authListener();
//   }, []);

//   return (
//     <div className="App">
//       {user ? (
//         <Home />
//       ) : (
//         <Login
//           email={email}
//           setEmail={setEmail}
//           password={password}
//           setPassword={setPassword}
//           handleLogin={handleLogin}
//           handleSignUp={handleSignUp}
//           hasAccount={hasAccount}
//           setHasAccount={setHasAccount}
//           emailError={emailError}
//           passwordError={passwordError}
//         />
//       )}
//     </div>
//   );
// };

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="Home">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ DashBoard } />
            <Route path="/calendar" component={ Calendar } />
            <Route path="/todos" component={ Todos } />
            <Route path="/uploader" component={ Uploader } />
            <Route path="/chats" component={ Chats } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
