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

const calendar = (props) => {
  const { notifys } = props;
  console.log(notifys);

  return (
    <div>
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: notifys }}
      >
        <Notifications notifys={notifys} />
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notifys: state.firestore.ordered.notifys
      ? state.firestore.ordered.notifys
      : [],
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "notifications" }])
)(calendar);
