import React from "react";
import TradeList from "./TradeList";
import classes from "./TradeListContainer.module.css";

const TradeListContainer = () => {
  return (
    <div className={classes.container}>
      <TradeList />
      <TradeList />
      <TradeList />
      <TradeList />
      <TradeList />
      <TradeList />
      <TradeList />
      <TradeList />
    </div>
  );
};

export default TradeListContainer;
