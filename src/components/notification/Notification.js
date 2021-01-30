import React from "react";
import PropTypes from "prop-types";
import Styles from "./Notification.module.css";

export const Notification = ({ message }) => {
  return (
    <div className={Styles.NotificationWrapper}>
      {`${message} is already in Contacts`}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
