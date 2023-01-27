import "./HeaderProfile.css";
import { BsChevronDown } from "react-icons/bs";

const HeaderProfile = (props) => {
  return (
    <div className="profile">
      <div className="header-profile-box">
        <img className="header-profile" src="img/profile_default.png" />
      </div>
      <div className="header-profile-username">{props.username}</div>
      <BsChevronDown />
    </div>
  );
};

export default HeaderProfile;
