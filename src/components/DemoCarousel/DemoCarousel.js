import React, { Component } from "react";
import "./DemoCarousel.css";
import img1 from "./Images/images.jpg";
import img2 from "./Images/healthyLife.jpg";
import img3 from "./Images/loseWeight.jpg";
import img4 from "./Images/mealPrep.jpg";
import img5 from "./Images/workingOut.jpg";

export default class CarouselComponent extends Component {
  render() {
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
                  src="https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_image/public/1280-mountain-climber.jpg?itok=YNclzUN6"
                  alt="First slide"
                />
                <div class="carousel-caption">
                  <br />
                  <br />
                  <h3>Hello</h3>
                  <p>WhatsUp</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div>
                <img
                  class="d-block w-100"
                  src="https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_image/public/1280-mountain-climber.jpg?itok=YNclzUN6"
                  alt="Second slide"
                />
                <div class="carousel-caption">
                  <br />
                  <br />
                  <h3>Hello</h3>
                  <p>WhatsUp</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div>
                <img
                  class="d-block w-100"
                  src="https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_image/public/1280-mountain-climber.jpg?itok=YNclzUN6"
                  alt="Third slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <br />
                  <br />
                  <h3>Hello</h3>
                  <p>WhatsUp</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div>
                <img
                  class="d-block w-100"
                  src="https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_image/public/reversecrunch-1280.jpg?itok=3_O1vCI4"
                  alt="Fourth slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <br />
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <img
                  class="d-block w-100"
                  src="https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_image/public/abs-exercises-main-1280.jpg?itok=ceXX_FHy"
                  alt="Eighth slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <br />
                </div>
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
