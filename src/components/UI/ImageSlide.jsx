import React from "react";
import classes from "./ImageSlide.module.css";

const ImageSlide = () => {
  return (
    <div className={classes.container}>
      <div className={classes["img-box"]}>
        <img className={classes.img} src="img/profile_default.png" />
      </div>
    </div>
  );
};

export default ImageSlide;
