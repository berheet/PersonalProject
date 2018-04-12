import React, { Component } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { getUser } from "../../../ducks/userReducer";
import { connect } from "react-redux";

class LostWeight extends Component {
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

    let maintainpercent = finalBMRformula / finalBMRformula * 100;

    return (
      <div>
        <Dashboard />
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
                href="/dashboard/MacroCalulator/maintain"
              >
                Maintain Weight
              </a>
              <a
                class="nav-item nav-link"
                href="/dashboard/MacroCalulator/gainweight"
              >
                Gain Weight
              </a>
              <a
                class="nav-item nav-link"
                href="/dashboard/MacroCalulator/lostweight"
              >
                Lose Weight
              </a>
            </div>
          </div>
        </nav>
        <div className="gain_weight_level">
          <h4 style={{ textAlign: "center" }}>Lose Weight: </h4> <br />
          <h5>Lose 1 pound a week:</h5>
          <div className="goalLevel">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="2000"
                aria-valuemin="0"
                aria-valuemax="5000"
              />{" "}
              {maintainpercent}
            </div>
            <p>
              <strong>{finalBMRformula}</strong>
            </p>

            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <br /> <br />
              <h5>Lose 2 pounds a week:</h5>
              <div className="goalLevel">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="2000"
                    aria-valuemin="0"
                    aria-valuemax="5000"
                  />{" "}
                  {maintainpercent}
                </div>
                <p>
                  <strong>{finalBMRformula}</strong>
                </p>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Collapsible Group Item #2
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <h5>Lose 3 pounds a week:</h5>
              <div className="goalLevel">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="2000"
                    aria-valuemin="0"
                    aria-valuemax="5000"
                  />{" "}
                  {maintainpercent}
                </div>
                <p>
                  <strong>{finalBMRformula}</strong>
                </p>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(LostWeight);
