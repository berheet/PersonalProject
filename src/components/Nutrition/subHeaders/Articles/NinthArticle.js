import React, { Component } from "react";

class NinthArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Your 4-Step Nutritional Gainz Plan
            </li>
          </ol>
        </nav>

        <h1>This is my ninth article</h1>
      </div>
    );
  }
}

export default NinthArticle;
