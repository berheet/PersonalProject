import React, { Component } from "react";

class ThirdArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              3 Ways To Bounce Back Strong After A Cheat Day
            </li>
          </ol>
        </nav>

        <h1>This is my third article</h1>
      </div>
    );
  }
}

export default ThirdArticle;
