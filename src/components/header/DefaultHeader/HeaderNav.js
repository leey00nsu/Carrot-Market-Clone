import "./HeaderNav.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store";
import { useCookies } from "react-cookie";

const HeaderNav = () => {
  const dispatch = useDispatch;
  const { pathname } = useLocation();
  const isLogin = useSelector((state) => state.isLogin);
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const logoutHandler = () => {
    removeCookie("refreshToken");
    localStorage.removeItem("token");
  };
  return (
    <ul className="header-nav">
      <li className="header-menu">
        <NavLink
          className={(navData) =>
            ["/", "/articles"].includes(pathname) ? "header-menu-active" : ""
          }
          to="/"
        >
          중고거래
        </NavLink>
      </li>
      <li className="header-menu">동네가게</li>
      <li className="header-menu">알바</li>
      <li className="header-menu">부동산 직거래</li>
      {isLogin && (
        <li onClick={logoutHandler} className="header-menu">
          로그아웃
        </li>
      )}
    </ul>
  );
};

export default HeaderNav;
