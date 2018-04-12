import React, { Component } from "react";
import "./RecipiesCss.css";
import { Link } from "react-router-dom";

class Recipies extends Component {
  render() {
    return (
      <div>
        <h1>Recipies</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="#">
            Recipies
          </Link>
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
      </div>
    );
  }
}

export default Recipies;
