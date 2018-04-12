import React, { Component } from "react";

class FirstArticle extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Articles">Articles</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Your No-BS Approach To Flexible Dieting
            </li>
          </ol>
        </nav>

        <h1> Your No-BS Approach To Flexible Dieting</h1>
        <div>
          <img
            className="firstimage"
            style={{ height: "25%", width: "25%" }}
            src="https://www.bodybuilding.com/images/your-no-bs-approach-to-flexible-dieting-header-v2-signature-830x467.jpg"
          />
        </div>
        <div style={{ marginLeft: "5vw", marginRight: "5vw" }}>
          <br />
          <p>
            Flexible dieting is not a new approach, but it's still one that
            receives pushback. Old-school competitors and hardcore meal preppers
            turn their noses up at flexible dieters because this "if it fits
            your macros" (IIFYM) approach allows, even encourages, eating
            unhealthy foods as part of a cutting phase. To detractors, this
            concept of fitting cheat foods into a meal plan just seems like,
            well, cheating.
          </p>
          <p>
            But is this perception backed by science? Bill Campbell, Ph.D.,
            CSCS, an associate professor of exercise science and director of the
            Performance and Physique Enhancement Laboratory at the University of
            South Florida, and his research team decided to put flexible dieting
            to the test. "To the best of my knowledge, we did the first study in
            resistance-trained individuals with this flexible dieting paradigm,"
            explains Campbell. Here are the five key takeaways from his team's
            research to help you take a smarter, no-BS approach to flexible
            dieting.{" "}
          </p>

          <p>
            <strong>1. It's As Healthy As You Make It</strong>
            <br />
            One of the biggest criticisms of flexible dieting is that it's not
            as healthy as stricter meal planning. After all, you're allowed to
            have cheat foods as long as they fit within your macronutrient ratio
            for each day—hence the IIFYM acronym. But just because someone eats
            a Snickers bar one day doesn't mean their entire diet is unhealthy.
            According to Campbell, flexible dieting is a more useful educational
            tool for making smart food decisions than tracking calories alone,
            and the experience of flexible dieting may lead to greater long-term
            success.
          </p>
          <img src="https://www.bodybuilding.com/images/2018/march/your-no-bs-approach-to-flexible-dieting-v2-signature-1-2-700xh.jpg" />
        </div>
      </div>
    );
  }
}

export default FirstArticle;
