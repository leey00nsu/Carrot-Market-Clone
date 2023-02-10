import "./Header.css";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderChat from "./HeaderChat";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <Link to="/" className="header-logo">
          <img className="header-logo" src="img/cm_logo.png"></img>
        </Link>
        <HeaderNav />
        <HeaderSearch />
        <HeaderChat />
      </div>
    </div>
  );
};

export default Header;
