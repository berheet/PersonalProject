import React, { Component } from "react";

class SecondArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
            11 Ways To Burn More Fat Every Day

            </li>
          </ol>
        </nav>

        <h1>This is my second article</h1>
      </div>
    );
  }
}

export default SecondArticle;
