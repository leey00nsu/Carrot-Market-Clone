import classes from "./Page3.module.css";
import TradeListContainer from "../../components/trade/TradeListContainer";

const Page3 = () => {
  return (
    <div className={classes.page}>
      <div className={classes["page-item"]}>
        <div className={classes["page-text"]}>
          <div className={classes["page-main-text"]}>
            <div>중고거래 인기매물</div>
          </div>
        </div>
        <TradeListContainer />
      </div>
    </div>
  );
};

export default Page3;
