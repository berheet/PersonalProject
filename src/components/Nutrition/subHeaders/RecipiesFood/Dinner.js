import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Dinner extends Component {
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
        <h1>Dinner Page</h1>
        <div className="breakfastDiv">
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://reciperunner.com/wp-content/uploads/2014/09/TurkeyandVegetableSkillet1.jpg" />
            <div>
              <br />
              <strong>Turkey and Vegetable Skillet</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://dinnerthendessert.com/wp-content/uploads/2015/07/Baked-Chicken-Brown-Rice-Vegetable-Casserole-4.jpg" />
            <div>
              <br />
              <strong>One-Pan Baked Chicken and Brown Rice Casserole</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://ohsweetbasil.com/wp-content/uploads/2016/01/vegetarian-quinoa-skillet-ohsweetbasil.com-2k.jpg" />
            <div>
              <br />
              <strong>Vegetarian Quinoa Skillet</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://chefsavvy.com/wp-content/uploads/Easy-30-Minute-Rainbow-Vegetable-Noodle-Stir-Fry1.jpg" />
            <div>
              <br />
              <strong>Rainbow Vegetable Noodle Stir-Fry</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://www.bakeyourday.net/wp-content/uploads/2014/01/chicken-soba-noodle-stir-fry-17-560x840.jpg" />
            <div>
              <br />
              <strong>Chicken Soba Noodle Stir-Fry</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://aggieskitchen.com/wp-content/uploads/2014/02/Italian_Chicken_Sausage_Stir_Fry_Recipe.jpg" />
            <div>
              <br />
              <strong>Italian Style Stir-Fry</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://www.thebewitchinkitchen.com/wp-content/uploads/2016/01/chicken-stir-fry-sweet-sriracha.jpg" />
            <div>
              <br />
              <strong>Sweet Sriracha Easy Chicken Stir-Fry</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://cdn.thelemonbowl.com/wp-content/uploads/2015/05/Garlic-Roasted-Veggie-Pasta-The-Lemon-Bowl.jpg" />
            <div>
              <br />
              <strong>Garlic Roasted Vegetable Pasta</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://www.garnishandglaze.com/wp-content/uploads/2014/07/bruschetta-pasta6.jpg" />
            <div>
              <br />
              <strong>Bruschetta Pasta</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://i2.wp.com/snappygourmet.com/wp-content/uploads/2016/01/Easy-Lemon-Chicken-Recipe-2a-txt.jpg?w=467&ssl=1" />
            <div>
              <br />
              <strong>Easy Lemon Chicken</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://173qcb30csdp49kz9m14gsrd-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/skillet-chicken-artichokes-zagleft-1a.jpg" />
            <div>
              <br />
              <strong>Skillet Chicken With Artichokes for One</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://4.bp.blogspot.com/-4DijgsCocec/VQn9BWS4a3I/AAAAAAAAR74/1vOfoOS3JSk/s1600/pan-seared%2Bsalmon%2Bcapers%2Bbaby%2Bartichokes%2B3.jpg" />
            <div>
              <br />
              <strong>Pan-Seared Salmon With Capers and Baby Artichokes</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
