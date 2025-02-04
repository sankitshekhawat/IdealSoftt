import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Css from "./Css";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Router> */}
      <App />
      <Css />
    {/* </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
