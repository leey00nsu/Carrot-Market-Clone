import classes from "./Page2.module.css";

const Page2 = () => {
  return (
    <div className={classes.page}>
      <div className={classes["page-item"]}>
        <div className={classes["page-img"]}>
          <img src="img/page2.webp"></img>
        </div>
        <div className={classes["page-text"]}>
          <div className={classes["page-main-text"]}>
            <div>우리 동네</div>
            <div>중고 직거래 마켓</div>
          </div>
          <div className={classes["page-sub-text"]}>
            동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
