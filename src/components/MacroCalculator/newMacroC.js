import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Link, Switch } from "react-router-dom";

class newMacroC extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let weightsection = 6.23 * this.props.user.currentweight;
    let heightsection = 12.7 * this.props.user.height;
    let agesection = 6.8 * this.props.user.age;
    let menBMRformula = 66 + weightsection + heightsection - agesection;
    let finalBMRformula = Math.floor(menBMRformula);
    let loseOnePound = finalBMRformula - 500;
    let loseTwoPounds = loseOnePound - 500;
    let loseThreePounds = loseTwoPounds - 500;
    let gainOnePound = finalBMRformula + 500;
    let gainTwoPounds = gainOnePound + 500;
    let gainThreePounds = gainTwoPounds + 500;

    return (
      <div className="desiredGoal">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="#">
            Desired Goal
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link
                class="nav-item nav-link"
                to="/dashboard/MacroCalulator/gainweight"
              >
                Weight Management
              </Link>
            </div>
          </div>
        </nav>
        {/* <h2>
          The amount of calories you need to achieve the following goals:{" "}
        </h2>
        <h4>Lose 3 pounds a week: </h4>
        <div className="goalLevel">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="2000"
              aria-valuemin="0"
              aria-valuemax="5000"
            />40%
          </div>
          <p>
            <strong>{loseThreePounds}</strong>
          </p>
        </div>
        <h4>Lose 2 pounds a week: </h4>
        <div className="goalLevel">
          <p>
            <strong>{loseTwoPounds}</strong>
          </p>
        </div>
        <h4>Lose 1 pound a week: </h4>
        <div className="goalLevel">
          <p>
            <strong>{loseOnePound}</strong>
          </p>
        </div>
        <h4>Maintain Weight: </h4>
        <div className="goalLevel">
          <p>
            <strong>{finalBMRformula}</strong>
          </p>
        </div>
        <h4>Gain 1 pound a week: </h4>
        <div className="goalLevel">
          <p>
            <strong>{gainOnePound}</strong>
          </p>
        </div>{" "}
        <h4>Gain 2 pounds a week: </h4>
        <div className="goalLevel">
          <p>
            <strong>{gainTwoPounds}</strong>
          </p>
        </div>{" "}
        <h4>Gain 3 pounds a week: </h4>
        <div className="goalLevel">
          <p>
            <strong>{gainThreePounds}</strong>
          </p>
        </div> */}
        <br />
        <p>Please select your desired goal</p>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(newMacroC);
