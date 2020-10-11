import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { FirebaseContext } from "./context/FirbaseContext";
import { firebase } from "./lib/firebase.prod";

ReactDom.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
