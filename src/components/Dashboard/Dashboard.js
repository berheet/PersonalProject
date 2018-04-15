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
            <Link to="/profile">Profile</Link>
          </li>
          <li className="MacroCalculator">
            <Link to="/dashboard/MacroCalculator">Macro Tracker</Link>
          </li>

          <li className="dboardLi">
            <Link to="/dashboard/profileSettings">Profile Settings</Link>
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
