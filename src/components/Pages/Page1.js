import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page">
      <div className="page-item">
        <div className="page-text">
          <div className="page-main-text">
            <div>당신 근처의</div>
            <div>당근마켓</div>
          </div>
          <div className="page-sub-text">
            중고 거래부터 동네 정보까지, 이웃과 함께해요.
          </div>
          <div className="page-sub-text">
            가깝고 따뜻한 당신의 근처를 만들어요.
          </div>
        </div>
        <div className="page-img">
          <img src="img/page1.webp"></img>
        </div>
      </div>
    </div>
  );
};

export default Page1;
