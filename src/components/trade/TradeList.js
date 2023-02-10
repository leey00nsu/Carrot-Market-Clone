import React from "react";
import classes from "./TradeList.module.css";
import { useNavigate } from "react-router-dom";

const TradeList = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/articles");
  };
  return (
    <article onClick={onClickHandler} className={classes.container}>
      <div className={classes["img-box"]}>
        <img className={classes.img} src="img/profile_default.png" />
      </div>
      <div className={classes.desc}>
        <div className={classes.title}>
          제목제목제목제목제목제목제목제목제목제목제목제목
        </div>
        <div className={classes.price}>
          가격가격가격가격가격가격가격가격가격가격가격가격
        </div>
        <div className={classes.address}>
          주소주소주소주소주소주소주소주소주소주소주소
        </div>
      </div>
    </article>
  );
};

export default TradeList;
