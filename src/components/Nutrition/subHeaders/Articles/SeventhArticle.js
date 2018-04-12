import React, { Component } from "react";

class SeventhArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Your Expert Guide To Vitamin C{" "}
            </li>
          </ol>
        </nav>

        <h1>This is my seventh article</h1>
      </div>
    );
  }
}

export default SeventhArticle;
