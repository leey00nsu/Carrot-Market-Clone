import "./Header.css";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderChat from "./HeaderChat";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <img className="header-logo" src="img/cm_logo.png"></img>
        <HeaderNav className="header-nav" />
        <HeaderSearch className="header-search" />
        <HeaderChat className="header-chat" />
      </div>
    </div>
  );
};

export default Header;
