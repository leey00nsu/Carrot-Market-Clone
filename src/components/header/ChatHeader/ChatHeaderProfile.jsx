import "./ChatHeaderProfile.css";
import { BsChevronDown } from "react-icons/bs";
import ProfileIcon from "../../UI/ProfileIcon";

const ChatHeaderProfile = (props) => {
  return (
    <div className="profile">
      <ProfileIcon />
      <div className="header-profile-username">{props.username}</div>
      <BsChevronDown />
    </div>
  );
};

export default ChatHeaderProfile;
