import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1> Profile </h1>
        </div>
        <div className="container" style={{ display: "flex" }}>
          <div style={{ display: "flex" }} />
          <div style={{ marginLeft: "2vw" }}>
            <p>
              <h5>{this.props.user.name} </h5>
            </p>
            <p>
              <h5> {this.props.user.age}</h5>
            </p>

            <p>
              <h5>Current Weight: {this.props.user.currentweight}</h5>{" "}
            </p>
            <p>
              <h5>Goal Weight: {this.props.user.goalweight}</h5>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(Profile);
