import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import moment from "moment";
import Time from "../TIme/Time";
import Carousel from "../DemoCarousel/DemoCarousel";
import newHeader from "../Header/newHeader";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      test: "hi"
    };
  }
  handleLogin() {
    window.location.href = "http://localhost:3001/auth";
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="carDiv">
          <Carousel /> <br />
          <br />
        </div>
        <div
          className="headerTwo"
          style={{
            alignContent: "center",
            color: "#004e73"
          }}
        >
          <h3>
            The day you start achieving your goals:{" "}
            <p className="Time">
              <Time />
            </p>
          </h3>{" "}
          {!this.props.user.age ? (
            <div className="loginDiv">
              <a href={process.env.REACT_APP_LOGIN}>
                <button
                  className="loginbutton"
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  LOGIN
                </button>
              </a>
            </div>
          ) : (
            <div className="loginDiv>">
              <a href={process.env.REACT_APP_LOGOUT}>
                <button>LOGOUT</button>
              </a>
            </div>
          )}
        </div>
        <br />
        )
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(Home);
