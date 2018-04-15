import React, { Component } from "react";
import "./DemoCarousel.css";
import img1 from "./Images/images.jpg";
import img2 from "./Images/healthyLife.jpg";
import img3 from "./Images/loseWeight.jpg";
import img4 from "./Images/mealPrep.jpg";
import img5 from "./Images/workingOut.jpg";

export default class CarouselComponent extends Component {
  render() {
    console.log(window);
    return (
      <div className="Homecaro">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
          pause="hover"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" style={{ width: "100%" }}>
              <div>
                <img
                  class="d-block"
                  src="https://wallscover.com/images/fitness-wallpaper-3.jpg"
                  alt="First slide"
                  style={{ width: "100vw", height: "100vh" }}
                />
                <div class="carousel-caption " style={{ color: "red" }} />
              </div>
            </div>
            <div class="carousel-item">
              <div>
                <img
                  class="d-block w-100"
                  src="
                  http://www.gafollowers.com/wp-content/uploads/2016/02/Healthy-eating.jpg"
                  alt="Second slide"
                  style={{ width: "100vw", height: "100vh" }}
                />
                <div class="carousel-caption" style={{ color: "red" }} />
              </div>
            </div>
            <div class="carousel-item">
              <div>
                <img
                  class="d-block w-100"
                  src="https://www.healthline.com/hlcmsresource/images/AN_images/man-drinking-pre-workout-supplement-1296x728.jpg"
                  alt="Third slide"
                  style={{ width: "100vw", height: "100vh" }}
                />
                <div class="carousel-caption " style={{ color: "red" }} />
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
