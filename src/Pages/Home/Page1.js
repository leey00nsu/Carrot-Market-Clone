import classes from "./Page1.module.css";

const Page1 = () => {
  return (
    <div className={classes.page}>
      <div className={classes["page-item"]}>
        <div className={classes["page-text"]}>
          <div className={classes["page-main-text"]}>
            <div>당신 근처의</div>
            <div>당근마켓</div>
          </div>
          <div className={classes["page-sub-text"]}>
            중고 거래부터 동네 정보까지, 이웃과 함께해요.
          </div>
          <div className={classes["page-sub-text"]}>
            가깝고 따뜻한 당신의 근처를 만들어요.
          </div>
        </div>
        <div className={classes["page-img"]}>
          <img src="img/page1.webp"></img>
        </div>
      </div>
    </div>
  );
};

export default Page1;
