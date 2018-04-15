import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import moment from "moment";
import Time from "../TIme/Time";
import Carousel from "../DemoCarousel/DemoCarousel";
import newHeader from "../Header/newHeader";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
import Dashboard from "../Dashboard/Dashboard";

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
      <div className="headerTwoDiv">
        <Carousel /> <br />
        <br />
        <div
          className="headerTwo"
          style={{
            width: "30vw",
            height: "30vh",
            backgroundColor: "white",
            alignContent: "center",
            color: "#004e73",
            opacity: "0.6",
            borderRadius: "25px",
            textAlign: "center"
          }}
        >
          {!this.props.user.age ? (
            <div className="loginDiv" style={{ marginTop: "5vh" }}>
              <h3 style={{ marginBottom: "7vh" }}>Begin your journey today!</h3>{" "}
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
            <div className="welcomeDiv">
              <h5>
                {" "}
                Congratulations on beginning your journey to a healthier and
                more confident you! Please dont hesitate to contact us for any
                questions
              </h5>
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
