import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
import Calendar from "react-calendar";

class calendar extends React.Component {
  data = [
    {
      Id: 2,
      Subject: "Paris",
      StartTime: new Date(2020, 8, 15, 10, 0),
      EndTime: new Date(2020, 8, 15, 12, 30),
    },
  ];

  render() {
    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: this.data }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default calendar;
