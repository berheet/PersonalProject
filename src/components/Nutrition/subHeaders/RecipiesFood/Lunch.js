import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Lunch extends Component {
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
        <h1>Lunch Page</h1>
        <div className="breakfastDiv">
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://www.chelseasmessyapron.com/wp-content/uploads/2016/06/Easy-sweet-Balsamic-chicken-and-veggies-made-in-one-pan.-Ten-minute-prep-and-twenty-minute-cooking-time-this-meal-is-efficient-healthy-and-simple-to-make.jpg" />
            <div>
              <br />
              <strong>One Pan Balsamic Chicken and Veggies</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://www.eatyourselfskinny.com/wp-content/uploads/2017/04/sriracha-meatballs-1.jpg" />
            <div>
              <br />
              <strong>Honey Sriracha Glazed Meatballs</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://thegirlonbloor.com/wp-content/uploads/2017/10/Meal-Prep-Chicken-Butternut-Squash-Harvest-Bowls-9.jpg" />
            <div>
              <br />
              <strong>Butternut Squash Harvest Bowls</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://s23209.pcdn.co/wp-content/uploads/2017/07/Turkey-Taco-Salad-Meal-PrepIMG_6212edit.jpg" />
            <div>
              <br />
              <strong>Turkey Taco Salad</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://www.hummusapien.com/wp-content/uploads/2016/12/loaded-lentil-salad6.jpg" />
            <div>
              <br />
              <strong>Loaded Lentil Salad</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://cf.thecreativebite.com/wp-content/uploads/2017/02/BBQ-Chicken-Roasted-Sweet-Potato-Bowls-The-Creative-Bite-4-copy.jpg" />
            <div>
              <br />
              <strong>BBQ Chicken Sweet Potato Bowls</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://uz71pyzpz0-flywheel.netdna-ssl.com/wp-content/uploads/2017/03/bang-bang-zucchini-noodles-meal-prep-10.jpg" />
            <div>
              <br />
              <strong>Bang Bang Zucchini Noodles</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/01/Zucchini-Noodles-Alio-Olio-GI-365-5.jpg" />
            <div>
              <br />
              <strong>Zucchini Noodles Aglio and Olio</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://www.thepetiteprofessional.com/wp-content/uploads/2015/10/SAM_0177-e1444613906357-768x1152.jpg" />
            <div>
              <br />
              <strong>Spaghetti Squash Stir-Fry</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://azaharcuisine.com/wp-content/uploads/2013/08/20130813-190246.jpg" />
            <div>
              <br />
              <strong>Stuffed Avocado With Garlic Shrimp</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://cleaneatingveggiegirl.com/wp-content/uploads/2015/06/turkey_plantain_nachos-4-681x1024.jpg" />
            <div>
              <br />
              <strong>Ground Turkey Plantain Nachos</strong>
            </div>
          </div>
          <div className="black dib br3 pa3 ma2 grow bw2 shadow-5 breakfastMeal">
            <img src="http://www.theorganickitchen.org/wp-content/uploads/2016/02/IMG_5253.jpg" />
            <div>
              <br />
              <strong>Jalapeño Turkey Burgers</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
