import React, { Component } from "react";

class SixthArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Why To Meal Prep, And Where To Start
            </li>
          </ol>
        </nav>

        <h1>This is my sixth article</h1>
      </div>
    );
  }
}

export default SixthArticle;
