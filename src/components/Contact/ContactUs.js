import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <br />
        <div className="contactusDiv">
          <div
            className="contactForm"
            // style={{ marginLeft: "35vw", marginRight: "35vw" }}
          >
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                />
                <br />
                <button
                  style={{ marginLeft: "10vw", width: "10vw", height: "5vh" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="contactinfo" style={{ textAlign: "center" }}>
            <div className="contactForm1">
              <h5>
                <i class="fas fa-globe" />
                <strong> DevMountain</strong>
              </h5>
              Dallas, Tx
              <br />
              <p>
                <br />
                <i class="fas fa-phone" /> (281)330-8004
              </p>
              <p>
                <br />
                <i class="fas fa-envelope" /> eyobell.berhe@live.longwood.edu
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
