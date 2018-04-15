import React, { Component } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { getUser } from "../../../ducks/userReducer";
import { connect } from "react-redux";

class GainWeight extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let activityincluded;
    if (
      this.props.user.activitylevel ===
      "SEDENTARY: Spend Most Of The Day Sitting (Bank Teller, Desk Job).Little or not exercise"
    ) {
      activityincluded = 1.2;
    }
    if (
      this.props.user.activitylevel ===
      "LIGHT ACTIVITY: Light exercise/ sports 1 – 3 days per week"
    ) {
      activityincluded = 1.375;
    }
    if (
      this.props.user.activitylevel ===
      "ACTIVE: Spend A Good Part Of The Day Doing Physical Activity (Waitress, Mailman)"
    ) {
      activityincluded = 1.55;
    }
    if (
      this.props.user.activitylevel ===
      "VERY ACTIVE: Spend Most Of The Day Doing Heavy Physical Activity (Messanger, Capenter)"
    ) {
      activityincluded = 1.725;
    }
    if (
      this.props.user.activitylevel ===
      "EXTREMELY ACTIVE: Daily exercise and active job"
    ) {
      activityincluded = 1.9;
    }
    let dog = "Maintain Current Weight";

    //Male
    let weightsection = 6.23 * this.props.user.currentweight;
    let heightsection = 12.7 * this.props.user.height;
    let agesection = 6.8 * this.props.user.age;
    let menBMRformula = 66 + weightsection + heightsection - agesection;
    let finalBMRformula = Math.floor(menBMRformula);
    let BMR_formula_with_activity = Math.floor(
      finalBMRformula * activityincluded
    );

    //Female
    let female_weight_section = 4.35 * this.props.user.currentweight;
    let female_height_section = 4.7 * this.props.user.height;
    let female_age_section = 4.7 * this.props.user.age;
    let female_BMR_formula =
      655 + female_weight_section + female_height_section - female_age_section;
    let final_female_BMR_formula = Math.floor(female_BMR_formula);
    let femal_BMR_formula_with_activity = Math.floor(
      final_female_BMR_formula * activityincluded
    );

    // let loseOnePound = finalBMRformula - 500;
    // let loseTwoPounds = loseOnePound - 500;
    // let loseThreePounds = loseTwoPounds - 500;
    // let gainOnePound = finalBMRformula + 500;
    // let gainTwoPounds = gainOnePound + 500;
    // let gainThreePounds = gainTwoPounds + 500;

    let BMRPercent = BMR_formula_with_activity / 5000 * 100;
    // let newVar = maintainpercent;

    //Percents
    let first;
    if (this.props.user.gender === "Male") {
      first = BMR_formula_with_activity - 1000;
    } else {
      first = femal_BMR_formula_with_activity - 1000;
    }

    let second =
      this.props.user.gender === "Male"
        ? BMR_formula_with_activity
        : femal_BMR_formula_with_activity;

    // let lose2pounds = first / second;
    console.log(first);
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Desired Goal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="fa"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class="nav-item nav-link"
                href="/dashboard/MacroCalulator/gainweight"
              >
                Gain Weight
              </a>
            </div>
          </div>
        </nav>
        <h4 style={{ textAlign: "center" }}>Gain Weight: </h4> <br />
        <div className="parentDiv">
          <div className="goalLevel" style={{ marginRight: "3vw" }}>
            <h5>Percentage Here:</h5>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width: `${
                    this.props.user.gender === "Male"
                      ? (BMR_formula_with_activity - 1000) / 5000 * 100
                      : (femal_BMR_formula_with_activity - 1000) / 5000 * 100
                  }%`
                }}
                // aria-valuenow={newVar}
                aria-valuemin="0"
                aria-valuemax="5000"
              />{" "}
            </div>
            <p>
              {this.props.user.gender === "Male"
                ? BMR_formula_with_activity - 1000
                : femal_BMR_formula_with_activity - 1000}
            </p>

            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      style={{ marginLeft: "-2vw" }}
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Lose 2 Pounds per Week
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">Cool stuff here</div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div
            className="goalLevel"
            style={
              this.props.user.goal === "Lose Weight: 1 pound per week"
                ? { backgroundColor: "red" }
                : null
            }
          >
            <h5>Lose 1 Pound per Week:</h5>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width: `${
                    this.props.user.gender === "Male"
                      ? (BMR_formula_with_activity - 500) / 5000 * 100
                      : (femal_BMR_formula_with_activity - 500) / 5000 * 100
                  }%`
                }}
                aria-valuenow="2000"
                aria-valuemin="0"
                aria-valuemax="5000"
              />{" "}
            </div>
            <p>
              {this.props.user.gender === "Male"
                ? BMR_formula_with_activity - 500
                : femal_BMR_formula_with_activity - 500}
            </p>

            <div id="accordion">
              <div class="card">
                <div
                  class="card-header"
                  id="headingTwo"
                  style={
                    this.props.user.goal === "Lose Weight: 1 pound per week"
                      ? { backgroundColor: "red" }
                      : null
                  }
                >
                  <h5 class="mb-0">
                    <button
                      style={{ marginLeft: "-2vw" }}
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                  style={
                    this.props.user.goal === "Lose Weight: 1 pound per week"
                      ? { backgroundColor: "red" }
                      : null
                  }
                >
                  <div class="card-body">Cool stuff here</div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="goalLevel" style={{ marginLeft: "5vw" }}>
            <h5>Maintain Current Weight:</h5>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width: `${
                    this.props.user.gender === "Male"
                      ? BMR_formula_with_activity / 5000 * 100
                      : femal_BMR_formula_with_activity / 5000 * 100
                  }%`
                }}
                aria-valuenow="5"
                aria-valuemin="0"
                aria-valuemax="5000"
              />{" "}
            </div>
            <p>
              {this.props.user.gender === "Male"
                ? BMR_formula_with_activity
                : femal_BMR_formula_with_activity}
            </p>

            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button style={{ marginLeft: "-2vw" }} class="btn btn-link">
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>

                <div class="card-body">Cool stuff here</div>
              </div>
            </div>
          </div>

          <div className="goalLevel" style={{ marginLeft: "5vw" }}>
            <h5>Percentage Here:</h5>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width: `${
                    this.props.user.gender === "Male"
                      ? (BMR_formula_with_activity + 500) / 5000 * 100
                      : (femal_BMR_formula_with_activity + 500) / 5000 * 100
                  }%`
                }}
                aria-valuenow={
                  this.props.user.gender === "Male"
                    ? BMR_formula_with_activity + 500
                    : femal_BMR_formula_with_activity + 500
                }
                aria-valuemin="0"
                aria-valuemax="5000"
              />{" "}
            </div>
            <p>
              {this.props.user.gender === "Male"
                ? BMR_formula_with_activity + 500
                : femal_BMR_formula_with_activity + 500}
            </p>

            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button
                      style={{ marginLeft: "-2vw" }}
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Gain 1 Pound per Week
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div class="card-body">Cool stuff here</div>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="goalLevel" style={{ marginLeft: "5vw" }}>
            <h5>Percentage Here:</h5>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width: `${
                    this.props.user.gender === "Male"
                      ? (BMR_formula_with_activity + 1000) / 5000 * 100
                      : (femal_BMR_formula_with_activity + 1000) / 5000 * 100
                  }%`
                }}
                aria-valuenow={
                  this.props.user.gender === "Male"
                    ? BMR_formula_with_activity + 1000
                    : femal_BMR_formula_with_activity + 1000
                }
                aria-valuemin="0"
                aria-valuemax="5000"
              />{" "}
            </div>
            <p>
              {this.props.user.gender === "Male"
                ? BMR_formula_with_activity + 1000
                : femal_BMR_formula_with_activity + 1000}
            </p>

            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingfive">
                  <h5 class="mb-0">
                    <button
                      style={{ marginLeft: "-2vw" }}
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Gain 2 Pounds per Week
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordion"
                >
                  <div class="card-body">Cool stuff here</div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(GainWeight);
