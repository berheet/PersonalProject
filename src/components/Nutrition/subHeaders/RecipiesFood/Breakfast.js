import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Breakfast extends Component {
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
        <h1>Breakfast Page</h1>
        <div className="breakfastDiv">
          <div
            className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal"
            style={{ backgroundColor: "white" }}
          >
            <img src="https://healthynibblesandbits.com/wp-content/uploads/2016/01/Savory-Oatmeal-Fried-Egg-1.jpg" />
            <div>
              <br />
              <strong>Savory Oatmeal With Cheddar and Fried Egg</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://therecipecritic.com/wp-content/uploads/2015/06/honey_lime_quinoa_fruit_salad-650x975.jpg" />
            <div>
              <br />
              <strong>Honey Lime Quinoa Fruit Salad</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://static1.squarespace.com/static/51338111e4b021358bcbb0e1/t/55d8aba5e4b030f73b34e77c/1440263097103/tomato+toast+w%2F+macadamia+ricotta%2C+shiso+%2B+black+lava+salt+%7C+dolly+and+oatmeal?format=750w" />
            <div>
              <br />
              <strong>Tomato Toast With Macadamia Ricotta</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://alldayidreamaboutfood.com/wp-content/uploads/2014/08/slow-cooker-breakfast-casserole.jpg" />
            <div>
              <br />
              <strong>Overnight Crock-Pot Egg Casserole</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://minimalistbaker.com/wp-content/uploads/2015/09/7-Ingredient-DARK-CHOCOLATE-Quinoa-Breakfast-Bowl-Full-of-antioxidants-fiber-and-protein-vegan-glutenfree-quinoa-breakfast.jpg" />
            <div>
              <br />
              <strong>Chocolate Quinoa Breakfast Bowl</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://foodfitnessfaithblog.files.wordpress.com/2013/07/dsc05711.jpg?w=640&h=962" />
            <div>
              <br />
              <strong>Berry Breakfast Parfait</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://assets.marthastewart.com/styles/wmax-300/d31/med105388_0110_fyk_spice_muffin/med105388_0110_fyk_spice_muffin_vert.jpg?itok=rNwkN_lj" />
            <div>
              <br />
              <strong>Morning Glory Muffins</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://www.bowlofdelicious.com/wp-content/uploads/2015/05/5-Minute-Spinach-and-Cheddar-Microwave-Quiche-in-a-Mug-2.jpg" />
            <div>
              <br />
              <strong>Spinach and Cheddar Microwave Quiche</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://nutritioninthekitch.com/wp-content/uploads/2012/09/IMG_6816.jpg" />
            <div>
              <br />
              <strong>Pumpkin Granola Yogurt Parfait</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://www.ambitiouskitchen.com/wp-content/uploads/2014/04/5-IMG_3418.jpg" />
            <div>
              <br />
              <strong>Sweet Potato and Black Bean Breakfast Burrito</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://4.bp.blogspot.com/-t170x3Qv8d4/T0rABOgIKzI/AAAAAAAACOU/uKQ1NpPYJXQ/s640/peanutbutter+smoothie_3057.jpg" />
            <div>
              <br />
              <strong>Peanut Butter and Banana Smoothie</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/06/breakfast-egg-muffins-7-683x1024.jpg" />
            <div>
              <br />
              <strong>Egg Breakfast Muffins</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
