import React from "react";
import "./Header.css";
import App from "../../App";
import { Link } from "react-router-dom";

const newHeader = () => {
  return (
    <div className="headerDiv">
      <div className="headerstuff">
        {" "}
        <Link className="btn-xs" to="/">
          <button style={{ backgroundColor: "#999999" }}>Home</button>
        </Link>
      </div>
      <div className="dropdown">
        <button
          style={{ backgroundColor: "#999999" }}
          class="dropdown-toggle btn-xs"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Nutrition
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <Link class="dropdown-item" to="/Recipies">
            Recipies
          </Link>

          <Link class="dropdown-item" to="/Articles">
            Articles
          </Link>
          <Link class="dropdown-item" to="/Top50">
            Top 10 Supplements of 2018
          </Link>
        </div>
      </div>
      <div class="dropdown">
        <button
          style={{ backgroundColor: "#999999" }}
          class="dropdown-toggle btn-xs"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Exercises
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2"
        >
          <Link class="dropdown-item" to="/UpperBody">
            Upper Body
          </Link>
          <Link class="dropdown-item" to="/Lowerboto">
            Lower Body
          </Link>
          <Link className="dropdown-item" to="/Abs">
            Abs
          </Link>
        </div>
      </div>
      <div class="dropdown">
        <Link class="btn-xs" to="/Shop">
          <button style={{ backgroundColor: "#999999" }}>Shop</button>
        </Link>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">
            Action
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button
          style={{ backgroundColor: "#999999" }}
          class="dropdown-toggle btn-xs"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          About
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">
            Action
          </button>
          <button class="dropdown-item" type="button">
            Another action
          </button>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </div>
      </div>
      <div class="dropdown">
        <Link class="btn-xs" to="/Contact">
          <button style={{ backgroundColor: "#999999" }}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default newHeader;
