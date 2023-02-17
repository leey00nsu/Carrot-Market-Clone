import React, { useState, useEffect } from "react";
import classes from "./ImageSlide.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ImageSlide = () => {
  const [index, setIndex] = useState(0);

  const imgLength = 3;

  const onNextHandler = () => {
    setIndex((prev) => prev + 1);
  };

  const onPrevHandler = () => {
    setIndex((prev) => prev - 1);
  };

  let translation = -677 * index; // 인덱스로부터 슬라이드할만큼을 계산

  useEffect(() => {
    console.log("changed");
    if (index >= imgLength) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(imgLength - 1);
    }
  }, [index]);

  return (
    <div className={classes.container}>
      <FiChevronLeft
        className={classes.button}
        onClick={onPrevHandler}
        size="30"
      />
      <div className={classes["img-box"]}>
        <div
          className={classes.imgs}
          style={{ transform: `translateX(${translation}px)` }}
        >
          <img className={classes.img} src="img/cat1.jpeg" />
          <img className={classes.img} src="img/deer1.jpeg" />
          <img className={classes.img} src="img/dog1.jpeg" />
        </div>
      </div>
      <FiChevronRight
        className={classes.button}
        onClick={onNextHandler}
        size="30"
      />
    </div>
  );
};

export default ImageSlide;
