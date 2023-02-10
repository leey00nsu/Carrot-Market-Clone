import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <button className={classes.spinner}></button>
    </div>
  );
};

export default LoadingSpinner;
