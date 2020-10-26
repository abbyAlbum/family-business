import React, { Component } from "react";
import moment from "moment";

class Timer extends Component {
  state = {
    eventDate: moment
      .duration()
      .add({ days: 7, hours: 0, minutes: 0, seconds: 0 }),
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  };

  updateTimer = () => {
    const x = setInterval(() => {
      let { eventDate } = this.state;

      if (eventDate <= 0) {
        clearInterval(x);
      } else {
        eventDate = eventDate.subtract(1, "s");
        const days = eventDate.days();
        const hours = eventDate.hours();
        const mins = eventDate.minutes();
        const secs = eventDate.seconds();

        this.setState({
          days,
          hours,
          mins,
          secs,
          eventDate,
        });
      }
    }, 1000);
  };

  componentDidMount() {
    this.updateTimer();
  }
  render() {
    const { days, hours, mins, secs } = this.state;
    return (
      <div>
        <span>{`${days} : ${hours} : ${mins} : ${secs}`}</span>
      </div>
    );
  }
}

export default Timer;
