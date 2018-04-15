import React, { Component } from "react";
import axios from "axios";

class TestimonialSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.message]: e.target.value
    });
  };

  onSubmit = () => {

    axios
      .post("/addingTestimonial", {
        name: this.state.name,
        rating: this.state.rating,
        message: this.state.message
      })
      .then(response => console.log(response));
  };

  render() {
    return (
      <div style={{ marginLeft: "30vw", marginRight: "30vw" }}>
        <h1> Submit Your Testimonial</h1>

        <div>
          <form onSubmit={() => this.handleSubmit()}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                value={this.state.rating}
                onChange={e => this.handleChange(e)}
                name="rating"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                name="message"
                value={this.state.message}
                type="message"
                onChange={e => this.handleChange(e)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="12"
              />
            </div>
          </form>
          <div>
            <button onClick={() => this.onSubmit()}> Submit </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialSubmission;
