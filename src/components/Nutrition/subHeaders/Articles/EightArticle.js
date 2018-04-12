import React, { Component } from "react";

class EightArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              5 Common Myths About Protein
            </li>
          </ol>
        </nav>

        <h1>This is my eight article</h1>
      </div>
    );
  }
}

export default EightArticle;
