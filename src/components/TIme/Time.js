import React from "react";
import Time from "react-time";

export default class TimeComponent extends React.Component {
  render() {
    let now = new Date();
    let wasDate = new Date("Thu Jul 18 2013 ");
    return (
      <div>
        <p>
          <Time value={now} format="MM/DD/YYYY" />
        </p>
      </div>
    );
  }
}

