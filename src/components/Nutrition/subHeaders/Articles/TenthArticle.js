import React, { Component } from "react";

class TenthArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              How Six-Pack Nutrition Is A Different Beast Than Fitness Nutrition{" "}
            </li>
          </ol>
        </nav>

        <h1>This is my tenth article</h1>
      </div>
    );
  }
}

export default TenthArticle;
