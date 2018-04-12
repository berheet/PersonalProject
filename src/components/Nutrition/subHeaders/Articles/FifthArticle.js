import React, { Component } from "react";

class FifthArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              5 Foods To Boost Your Energy
            </li>
          </ol>
        </nav>

        <h1>This is my fifth article</h1>
      </div>
    );
  }
}

export default FifthArticle;
