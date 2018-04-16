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
            style={{ height: "25%", width: "25%", marginLeft: "35%" }}
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
          <img
            src="https://www.bodybuilding.com/images/2018/march/your-no-bs-approach-to-flexible-dieting-v2-signature-1-2-700xh.jpg"
            style={{ height: "50%", width: "45%", marginLeft: "25%" }}
          />

          <p>
            <br />
            "If you look at just calories, a donut might have the same total
            calories as a chicken sandwich, but the macros are completely
            different," explains Campbell. "I think everybody would benefit from
            tracking macros for a period of their life. You learn so much about
            making food choices." Flexible dieting is as healthy or unhealthy as
            you want it to be, and if you're in a strict diet phase, your macros
            won't allow you to pig out on too many naughty foods, anyway.
            Campbell's research shows the real value of this approach is how it
            teaches you to make healthier food choices while still fitting in
            less-healthy options every now and then. Tracking macros through
            flexible dieting is a great way to learn healthy habits without
            feeling deprived. 2. It Works Better When You Lift The appeal of
            flexible dieting is obvious. In theory, you can eat whatever you
            want and still lose weight. Many take this concept one step further
            and start to believe resistance training is not as important for
            someone sticking to their macros, because that person is already
            dieting for better body composition. Campbell and his team made it
            their goal to specifically study the effects of flexible dieting on
            a trained population, and the results were clear.
          </p>
          <br />
          <img
            src="https://www.bodybuilding.com/images/your-no-bs-approach-to-flexible-dieting-v2-signature-2-700xh.jpg"
            style={{ height: "40%", width: "35%", marginLeft: "25%" }}
          />
          <p>
            <br />
            "If your goal is to lose weight, flexible dieting by itself is going
            to work great," says Campbell. "But, you're not going to change your
            body shape without resistance training. Without it, you'll just be a
            smaller, puffier version of yourself." Resistance training makes all
            the difference when you're already lean and trying to go from a good
            physique to a great physique. "Lifting weights changes the contours
            of your physique," explains Campbell. "It's what will maintain your
            muscle mass during a diet." The bottom line is that flexible dieting
            needs to be paired with resistance training if you truly want to
            change your physique.
          </p>
          <strong>3. The Scale May Not Change—And That's OK</strong>
          <p>
            When you're losing fat and gaining muscle, the numbers on the scale
            rarely tell the whole story. "I'm biased because I'm a scientist,"
            says Campbell. "But I would say to get more data than just the
            scale. Your physique may be drastically improving if you're gaining
            muscle and losing fat, but the scale may not change at all." When
            you start tracking macros instead of calories, you're putting the
            ideal ratio of protein to carbohydrate to fat in your body, which
            can have a dramatic effect on your body composition. Hitting those
            ideal ratios encourages your body to build lean muscle and burn body
            fat.
          </p>
          <img
            src="https://www.bodybuilding.com/images/your-no-bs-approach-to-flexible-dieting-v2-signature-3-700xh.jpg"
            style={{ height: "40%", width: "35%", marginLeft: "25%" }}
          />
          <p>
            <br />
            This is precisely why the scale may not change at all: You could be
            adding muscle at a rate that nearly matches your fat loss, so the
            net change would be almost zero. By emphasizing macronutrients over
            merely counting calories, flexible dieting could dramatically
            transform your physique without significantly changing the numbers
            on the scale. As Campbell explains, "If you're gaining muscle and
            losing fat, your body is changing." <br />So embrace the idea that
            the scale might not change and use other methods (e.g., tape
            measure, calipers, bioelectrical impedance analysis) to collect more
            data and make sure flexible dieting is working for you.
          </p>
        </div>
      </div>
    );
  }
}

export default FirstArticle;
