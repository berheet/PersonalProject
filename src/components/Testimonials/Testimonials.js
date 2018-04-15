import React, { Component } from "react";
import { Link } from "react-router-dom";

class Testimonials extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.getTestimonials();
  }
  render() {
    return (
      <div>
        <h1>Testimonials Page </h1>

        <div>
          <h3>Name: </h3>
          <h4>Rating:</h4>
          <h4>Message</h4>
        </div>
        <Link to="/TestimonialSubmission">
          <button> Submit New Testimonial</button>
        </Link>
      </div>
    );
  }
}

export default Testimonials;
