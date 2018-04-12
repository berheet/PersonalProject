import React, { Component } from "react";
import "./signUpStepTwo.css";

export default class signUpStepTwo extends Component {
  render() {
    return (
      <div className="signUpTwoDiv">
        <h1>Macronutrient Calculator</h1>
        <h2> Tell Us About Yourself:</h2>
        <form>
          Age:{" "}
          <input
            type="text"
            placeholder="yrs"
            style={{ width: "50px", textAlign: "center" }}
          />{" "}
          <br />
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female <br />
          Height:{" "}
          <input
            text="text"
            name="feet"
            placeholder="ft"
            style={{ width: "50px", textAlign: "center" }}
          />
          <input
            text="text"
            name="inches"
            placeholder="in"
            style={{ width: "50px", margin: "7px", textAlign: "center" }}
          />{" "}
          <br />
          Current Weight:{" "}
          <input
            placeholder="lbs"
            style={{ width: "75px", textAlign: "center" }}
          />{" "}
          <br />
          Goal Weight:{" "}
          <input
            placeholder="lbs"
            style={{ marginTop: "7px", width: "75px", textAlign: "center" }}
          />{" "}
          <br />
          <div className="activityParentdiv">
            <h3>Select Activity Level: </h3>
            <div className="activityLevels" style={{ display: "block" }}>
              <input type="radio" name="Activity" value="SEDENTARY" />{" "}
              <strong>SEDENTARY:</strong> Spend Most Of The Day Sitting (Bank
              Teller, Desk Job).Little or not exercise <br />
              <input type="radio" name="Activity" value="lightActivity" />{" "}
              <strong>LIGHT ACTIVITY:</strong> Light exercise/ sports 1 – 3 days
              per week<br />
              <input type="radio" name="Activity" value="Active" />{" "}
              <strong>ACTIVE:</strong> Spend A Good Part Of The Day Doing
              Physical Activity (Waitress, Mailman) <br />{" "}
              <input type="radio" name="Activity" value="veryActive" />{" "}
              <strong>VERY ACTIVE:</strong> Spend Most Of The Day Doing Heavy
              Physical Activity (Messanger, Capenter) <br />
              <input
                type="radio"
                name="Activity"
                value="extremelyActive"
              />{" "}
              <strong>EXTREMELY ACTIVE:</strong> Daily exercise and active job
            </div>
          </div>
          <div className="goalDiv">
            <h3> Goal:</h3>
            <div className="selectGoal" style={{ display: "block" }}>
              <input
                class="block"
                type="radio"
                name="maintain"
                value="loseTwoPound"
              />{" "}
              <strong>Lose Weight:</strong> 3 pounds per week{" "}
              <strong>(Not recommended!</strong>)<br />
              <input
                class="block"
                type="radio"
                name="maintain"
                value="loseTwoPound"
              />{" "}
              <strong>Lose Weight:</strong> 2 pounds per week <br />
              <input
                class="block"
                type="radio"
                name="maintain"
                value="loseOnePound"
              />{" "}
              <strong>Lose Weight:</strong> 1 pound per week <br />
              <input
                class="block"
                type="radio"
                name="maintain"
                value="maintain"
              />{" "}
              <strong>Maintain Current Weight</strong> <br />
              <input
                class="block"
                type="radio"
                name="maintain"
                value="gainOnePound"
              />{" "}
              <strong>Gain Muscle:</strong> Gain 1 pound per week <br />
              <input
                class="block"
                type="radio"
                name="maintain"
                value="gainTwoPound"
              />{" "}
              <strong>Gain Muscle:</strong> Gain 2 pounds per week <br />
              <input
                class="block"
                type="radio"
                name="maintain"
                value="gainTwoPound"
              />{" "}
              <strong>Gain Muscle:</strong> Gain 3 pounds per week{" "}
              <strong>(Aggressive!)</strong> <br />
            </div>
          </div>
        </form>
        <br />
        <button style={{ height: "75px", width: "7%", fontSize: "25px" }}>
          <strong>Calculate</strong>
        </button>
      </div>
    );
  }
}
