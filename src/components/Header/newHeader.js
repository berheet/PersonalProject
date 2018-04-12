import React from "react";
import "./Header.css";
import App from "../../App";
import { Link } from "react-router-dom";

const newHeader = () => {
  return (
    <div className="headerDiv">
    <div className="headerBtns">
      <div class="btn-group">
        <Link to="/">
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#004E73", color: "white" }}
          >
            Home
          </button>
        </Link>
      </div>
      <div class="btn-group">
        <button
          type="button"
          class="btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ backgroundColor: "#004E73", color: "white" }}
        >
          Nutrition
        </button>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/Recipies">
            Recipies
          </Link>
          <Link class="dropdown-item" to="/Articles">
            Articles
          </Link>
          <Link class="dropdown-item" to="/Top50">
            Top 50 Supplements
          </Link>
        </div>
      </div>
      <div class="btn-group">
        <button
          type="button"
          class="btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ backgroundColor: "#004E73", color: "white" }}
        >
          Exercise
        </button>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/UpperBody">
            Upper Body
          </Link>
          <Link class="dropdown-item" to="/Lowerbody">
            Lower Body
          </Link>
          <Link class="dropdown-item" to="/Abs">
            Abs/Core
          </Link>
        </div>
      </div>
      <div class="btn-group">
        <button
          type="button"
          class="btn"
          style={{ backgroundColor: "#004E73", color: "white" }}
        >
          Action
        </button>
      </div>
      <div class="btn-group">
      <Link to="/Contact">
        <button
          type="button"
          class="btn"
          style={{ backgroundColor: "#004E73", color: "white" }}
        >
          Contact Us
        </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default newHeader;
