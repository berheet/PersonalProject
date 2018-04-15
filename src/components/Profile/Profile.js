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
        <div className="container">
          <h1> Profile </h1>
          <h4>Name: {this.props.user.name}</h4>
          <h4>Age: {this.props.user.age}</h4>
          <h4>Current Weight: {this.props.user.currentweight}</h4>
          <h4>Goal Weight: {this.props.user.goalweight}</h4>
          <h4>{this.props.user.goal}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(Profile);
