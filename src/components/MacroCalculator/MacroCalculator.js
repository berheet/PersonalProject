import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";

class MacroCalculator extends Component {
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

    return (
      <div>
        <Dashboard />

        <h2>The amount of calories you need to: </h2>
        <h4>Maintain Weight: </h4>
        <p>
          <strong>{finalBMRformula}</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(MacroCalculator);
