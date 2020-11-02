import React from "react";
import { addNotification } from "../../store/Actions/notificationActions";
import { connect } from "react-redux";

const notifications = (props) => {
  const { notifys } = props;
  console.log(notifys.length);

  const notification = notifys.length ? (
    notifys.map((notifys) => {
      return (
        <div className="collection-item" key={notifys.index}>
          <span>{notifys.index}</span>
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

export default connect(null, mapDispatchToProps)(notifications);
