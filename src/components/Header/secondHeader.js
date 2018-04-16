import React from "react";
import "./Header.css";
import App from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const SecondHeader = () => {
  return (
    <div className="headerDiv" style={{ height: "20vh", margin: "0" }}>
      <div className="logoDiv">
        <img
          src="https://files.slack.com/files-pri/T039C2PUY-FA73C1DMF/e-volving1.png"
          style={{
            height: "30vh",
            width: "18vw",
            marginLeft: "1vw",
            zIndex: "-2"
          }}
        />
      </div>
      <div
        className="buttonsDiv"
        style={{
          backgroundColor: "#004e73",
          height: "6vh",
          width: "100vw",
          position: "absolute",
          position: "fixed",
          zIndex: "1000"
        }}
      >
        <div className="headerBtns">
          <div class="btn-group">
            <Link to="/">
              <button
                type="button"
                class="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  marginLeft: "50vw"
                }}
              >
                <strong>Home</strong>
              </button>
            </Link>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "none"
              }}
            >
              <strong> Nutrition</strong>
            </button>
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/Recipies">
                Recipies
              </Link>
              <Link class="dropdown-item" to="/Articles">
                Articles
              </Link>
              <Link class="dropdown-item" to="/Top50">
                Top 0 Supplements
              </Link>
            </div>
          </div>

          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "none"
              }}
            >
              <strong>Exercise</strong>
            </button>
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/UpperBody">
                Upper Body
              </Link>
              <Link class="dropdown-item" to="/Lowerbody">
                Lower Body
              </Link>
              <Link class="dropdown-item" to="/Abs">
                Abs/Core
              </Link>
            </div>
          </div>
          <div class="btn-group">
            <Link to="/Testimonials">
              <button
                type="button"
                class="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none"
                }}
              >
                <strong>Client Testimonials</strong>
              </button>
            </Link>
          </div>
          <div class="btn-group">
            <Link to="/Contact">
              <button
                type="button"
                class="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none"
                }}
              >
                <strong>Contact Us</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state.userReducer;
export default withRouter(connect(mapStateToProps, { getUser })(SecondHeader));
