import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTestimonial } from "../../ducks/userReducer";
import { connect } from "react-redux";
import axios from "axios";

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonials: []
    };
  }

  componentDidMount() {
    axios.get("/api/testimonial").then(res => {
      this.setState({
        testimonials: res.data
      });
    });
  }
  render() {
    let mappedTestimonials = "";

    if (this.state.testimonials && this.state.testimonials.length > 0) {
      const { testimonials } = this.state;
      mappedTestimonials = testimonials.map(testimonial => {
        return (
          <div key={testimonial.name + testimonial.message}>
            <h3>Name: {testimonial.name}</h3>
            <h4>Rating: {testimonial.rating}</h4>
            <h4>Message: {testimonial.message}</h4>
          </div>
        );
      });
    }

    return (
      <div>
        <h1>Testimonials Page </h1>
        {mappedTestimonials}
        <Link to="/TestimonialSubmission">
          <button> Submit New Testimonial</button>
        </Link>
      </div>
    );
  }
}

export default Testimonials;
