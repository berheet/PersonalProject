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
          <div className="testdiv">
            <div
              key={testimonial.name + testimonial.message}
              style={{ textAlign: "center", display: "flex" }}
            >
              <img
                src={testimonial.image}
                style={{ height: "10%", width: "10%", marginRight:"2%" }}
              />
              <h5 style={{ margintop:"1%", marginLeft:"5%" }}>
                <strong>" </strong>
                {testimonial.message}
                <strong>
                  "
                  <p>
                    <br />-{testimonial.name}
                  </p>
                </strong>
              </h5>
            </div>
            <div>
              <p>Rating: {testimonial.rating}/5</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <h1>Here's what our clients are saying! </h1>
        {mappedTestimonials}
        <Link to="/TestimonialSubmission">
          <button style={{ marginLeft: "40vw", marginBottom: "5vh" }}>
            {" "}
            Submit New Testimonial
          </button>
        </Link>
      </div>
    );
  }
}

export default Testimonials;
