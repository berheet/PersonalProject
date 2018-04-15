import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Calendar from "./components/Calendar/Calendar";
import alertForum from "./components/Calendar/alertForum";
import routes from "./routes";
import Dashboard from "./components/Dashboard/Dashboard";
import Carousel from "./components/DemoCarousel/DemoCarousel";
import NewHeader from "./components/Header/newHeader";
import { connect } from "react-redux";
import { getUser } from "./ducks/userReducer";
import { withRouter } from "react-router";
import SecondHeader from "./components/Header/secondHeader";

const style = {
  position: "relative",
  margin: "50px auto"
};

class App extends Component {
  onDayClick = (e, day) => {
    alertForum();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.location.pathname === "/" ? (
          <div className="App">
            <NewHeader />
          </div>
        ) : (
          <div className="App">
            <SecondHeader />
          </div>
        )}
        {!this.props.user.age ? null : (
          <div classNane="theDashBoard">
            <Dashboard />
          </div>
        )}
        <div className="belowDBoard" style={{ overflowX: "hidden" }}>
          {routes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default withRouter(connect(mapStateToProps, { getUser })(App));
