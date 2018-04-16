import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    alert(
      `Thank you for your inquiry, ${
        this.state.name
      }. A representative will get in contact with you as soon as possible.`
    );
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        <h1>Contact Us</h1>
        <br />
        <div className="contactusDiv">
          <div
            className="contactForm"
            // style={{ marginLeft: "35vw", marginRight: "35vw" }}
          >
            <form onSubmit={() => this.handleSubmit()}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Comments
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                />
                <br />
                <button
                  style={{ marginLeft: "35%", width: "30%", height: "15%" }}
                  onClick={() => this.onSubmit()}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div
            className="contactinfo"
            style={{ textAlign: "center", marginTop: "5%", marginLeft:"-10%" }}
          >
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
                <br />
              </p>
              <div>
                <img
                  src="http://www.strategic-business-partners.net/wp-content/uploads/2014/12/services-social-top-icons.png"
                  style={{ height: "20%", width: "35%" }}
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
