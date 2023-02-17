import React, { useState } from "react";
import classes from "./LoadingModal.module.css";
import ReactDOM from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = (props) => {
  return <LoadingSpinner />;
};

const LoadingModal = (props) => {
  const portalId = document.getElementById("modal");
  return (
    <div>
      {/* {ReactDOM.createPortal(<BackDrop />, portalId)} */}
      {ReactDOM.createPortal(<Modal onlogin={props.onlogin} />, portalId)}
    </div>
  );
};

export default LoadingModal;
