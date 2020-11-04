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
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Calendar from "react-calendar";
import Notifications from "./Notifications";

const calendar = () => {
  const notifys = [{
    Id: 2,
    Subject: 'Paris',
    StartTime: new Date(2020, 10, 15, 10, 0),
    EndTime: new Date(2020, 10, 15, 12, 30),
}];


  return (
    
    <div>
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: notifys }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        
        <Notifications notifys={notifys} />
      </ScheduleComponent>
    </div>
  );
  
};



const mapStateToProps = (state) => {
  return {
    notifys: state.firestore.ordered.notifys
      ? state.firestore.ordered.notifys
      : [],
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "notifications" }])
)(calendar);
