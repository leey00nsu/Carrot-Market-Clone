import "./HeaderNav.css";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="header-nav">
      <li className="header-menu">
        <NavLink
          className={(navData) =>
            navData.isActive ? "header-menu-active" : ""
          }
          to="/"
        >
          중고거래
        </NavLink>
      </li>
      <li className="header-menu">동네가게</li>
      <li className="header-menu">알바</li>
      <li className="header-menu">부동산 직거래</li>
      <li className="header-menu">중고차 직거래</li>
    </ul>
  );
};

export default HeaderNav;
