import classes from "./Header.module.css";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderBtn from "./HeaderBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <div className={classes.header}>
      <div className={classes["header-item"]}>
        <Link to="/" className={classes["header-logo"]}>
          <img className={classes["header-logo"]} src="img/cm_logo.png"></img>
        </Link>
        <HeaderNav />
        <HeaderSearch />
        <HeaderBtn isLogin={isLogin} />
      </div>
    </div>
  );
};

export default Header;
