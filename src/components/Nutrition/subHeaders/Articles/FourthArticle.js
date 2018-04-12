import React, { Component } from "react";

class FourthArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              4 Reasons Why You Should Be Intermittent Fasting
            </li>
          </ol>
        </nav>

        <h1>This is my fourth article</h1>
      </div>
    );
  }
}

export default FourthArticle;
