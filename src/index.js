import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUpStepTwo from "./components/signUpStepTwo/signUpStepTwo";
import Calendar from "./components/Calendar/Calendar";
import FirstCarousel from "./components/DemoCarousel/DemoCarousel";
import Home from "./components/Home/Home";
import Time from "./components/TIme/Time";
import store from "./store";
import "tachyons";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
