import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import "./ProfileSettings.css";
import { ENOPROTOOPT } from "constants";
import axios from "axios";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getUser } from "../../ducks/userReducer";

class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      height: "",
      currentWeight: "",
      goalWeight: "",
      activityLevel: "",
      goal: ""
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    axios
      .post("/updatingProfile", {
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        height: this.state.height,
        currentWeight: this.state.currentWeight,
        goalWeight: this.state.goalWeight,
        activityLevel: this.state.activityLevel,
        goal: this.state.goal,
        id: this.props.user.id
      })
      .then(response => this.props.getUser() && alert("That was easy!"));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form className="formClass" onSubmit={() => this.handleSubmit()}>
          <div class="nameDiv">
            <label for="exampleFormControlInput1">Name</label>
            <input
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              type="text"
              class="form-control"
              placeholder="name"
              required
            />{" "}
          </div>
          <div class="ageDiv">
            <label for="exampleFormControlInput2">Age</label>
            <input
              name="age"
              value={this.state.age}
              onChange={e => this.handleChange(e)}
              type="text"
              class="form-control"
              placeholder="age"
              required
            />{" "}
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Gender</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="gender"
              value={this.state.gender}
              onChange={e => this.handleChange(e)}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Height</label>
            <input
              name="height"
              value={this.state.height}
              onChange={e => this.handleChange(e)}
              type="text"
              class="form-control"
              placeholder="in"
              required
            />{" "}
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Current Weight</label>
            <input
              name="currentWeight"
              value={this.state.currentWeight}
              onChange={e => this.handleChange(e)}
              type="text"
              class="form-control"
              placeholder="lbs"
              required
            />{" "}
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Goal Weight</label>
            <input
              name="goalWeight"
              value={this.state.goalWeight}
              onChange={e => this.handleChange(e)}
              type="text"
              class="form-control"
              placeholder="lbs"
              required
            />{" "}
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Activity Level</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="activityLevel"
              value={this.state.activityLevel}
              onChange={e => this.handleChange(e)}
            >
              <option>Select Activity Level</option>
              <option>
                SEDENTARY: Spend Most Of The Day Sitting (Bank Teller, Desk
                Job).Little or not exercise
              </option>
              <option>
                LIGHT ACTIVITY: Light exercise/ sports 1 – 3 days per week
              </option>
              <option>
                ACTIVE: Spend A Good Part Of The Day Doing Physical Activity
                (Waitress, Mailman)
              </option>
              <option>
                VERY ACTIVE: Spend Most Of The Day Doing Heavy Physical Activity
                (Messanger, Capenter)
              </option>
              <option>EXTREMELY ACTIVE: Daily exercise and active job</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Goal</label>
            <select
              class="form-control"
              id="Goal"
              name="goal"
              value={this.state.goal}
              onChange={e => this.handleChange(e)}
            >
              <option> Select Desired Goal</option>
              <option>Lose Weight: 3 pounds per week (Not recommended!)</option>
              <option>Lose Weight: 2 pounds per week</option>
              <option>Lose Weight: 1 pound per week</option>
              <option>Maintain Current Weight</option>
              <option> Gain Muscle: Gain 1 pound per week</option>
              <option>Gain Muscle: Gain 2 pounds per week</option>
              <option>Gain Muscle: Gain 3 pounds per week (Aggressive!)</option>
            </select>
          </div>
        </form>
        <br />
        <div className="buttonDiv">
          <button onClick={() => this.onSubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.userReducer;
export default connect(mapStateToProps, { getUser })(ProfileSettings);
