import React from "react";
import { addNotification } from "../../store/Actions/notificationActions";
import { connect } from "react-redux";

const Notifications = (props) => {
  const { notifys } = props;
  console.log(notifys);
 
  console.log(Object.keys(notifys).length);

  const notification = notifys.length ? (
    notifys.map((notify) => {
      return (
        <div className="collection-item" key={notify.index}>
          <span>{notify.Subject}</span>
        </div>
      );
    })
  ) : (
    <p className="center"> No events </p>
  );
  return <div className="notification collection">{notification}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNotification: (notifys) => dispatch(addNotification(notifys)),
  };
};

export default connect(null, mapDispatchToProps)(Notifications);
