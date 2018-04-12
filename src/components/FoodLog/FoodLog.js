import React, { Component } from "react";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Calendar from "../Calendar/Calendar";

const style = {
  position: "relative",
  margin: "50px auto"
};

export default class FoodLog extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <h1>Food Log </h1>
      </div>
    );
  }
}
