import Page1 from "./Page1";
import Header from "../header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header className="header" />
      <div className="pages">
        <Page1 />
        <Page1 />
        <Page1 />
      </div>
    </>
  );
};

export default Home;
