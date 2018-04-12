import React, { Component } from "react";
import "./Dashboard.css";
import { Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="dboardDiv">
        <ul className="dboardUl">
          <li className="dboardLi">
            <a href="/profile">Profile</a>
          </li>
          <li className="MacroCalculator">
            <a href="/dashboard/MacroCalculator">Macro Tracker</a>
          </li>
          <li className="dboardLi">
            <a href="/dashboard/FoodLog">Food Log</a>
          </li>
          <li className="dboardLi">
            <a href="/dashboard/profileSettings">Profile Settings</a>
          </li>
          <li className="dboardLi">Welcome, {this.props.user.name}</li>
          {this.props.user ? (
            <a href={process.env.REACT_APP_LOGOUT}>
              <button>LOGOUT</button>
            </a>
          ) : null}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(Dashboard);
