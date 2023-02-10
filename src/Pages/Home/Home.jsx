import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Header from "../../components/header/DefaultHeader/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="pages">
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    </>
  );
};

export default Home;
