import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Snacks extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Recipies
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link" to="/BreakfastRecipies">
                Breakfast
              </Link>
              <Link class="nav-item nav-link" to="/LunchRecipies">
                Lunch
              </Link>
              <Link class="nav-item nav-link" to="/DinnerRecipies">
                Dinner
              </Link>
              <Link class="nav-item nav-link" to="/SnacksRecipies">
                Snacks
              </Link>
            </div>
          </div>
        </nav>
        <h1>Snacks Page</h1>
        <div className="breakfastDiv">
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://www.wildeorchard.co.uk/wp-content/uploads/2017/02/Seeded-Flat-Bread-Crackers-9939.jpg" />
            <div>
              <br />
              <strong>Easy Homemade Flatbread Crackers</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://thebusybaker.ca/wp-content/uploads/2016/03/sea-salt-garlic-kale-chips-4.jpg" />
            <div>
              <br />
              <strong>Sea Salt and Garlic Kale Chips</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://food-fanatic-res.cloudinary.com/iu/s--fOFtc4ov--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1443268030/baked-parsnip-chips-picture.jpg" />
            <div>
              <br />
              <strong>Baked Parsnip Chips</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://littlebitsof.com/wp-content/uploads/2016/06/carmelized-onion-and-bacon-compote-4.png" />
            <div>
              <br />
              <strong>
                Caramelized Onion and Bacon Compote on Sweet Potato Crostini
              </strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://thebigmansworld.com/wp-content/uploads/2016/04/healthy-flourless-blueberry-breakfast-muffins-5.jpg" />
            <div>
              <br />
              <strong>Flourless Blueberry Breakfast Muffins</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2017/07/IMG_2017_07_15_10627-cropped.jpg" />
            <div>
              <br />
              <strong>Mix-and-Match Veggie Quesadillas</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2016/09/IMG_2016_08_29_08305.jpg" />
            <div>
              <br />
              <strong>Almond Butter Brown Rice Crispy Treats</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2014/12/IMG_2014_11_05_01479-cropped.jpg" />
            <div>
              <br />
              <strong>Mini Sweet Potato Pizzas</strong>
            </div>
          </div>

          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2017/03/IMG_2017_03_01_09697.jpg" />
            <div>
              <br />
              <strong>Almost-Raw Carrot Cake Bliss Balls</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2016/12/IMG_2016_12_01_09002-layered.jpg" />
            <div>
              <br />
              <strong>Nacho Snacks With Carrot Queso</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2015/12/IMG_2015_12_24_06946-21.jpg" />
            <div>
              <br />
              <strong>Sweet Potato Pomegranate Crostini</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2015/08/IMG_2015_08_07_05606-cropped.jpg" />
            <div>
              <br />
              <strong>Curried Chickpea Salad Sliders</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
