import "./ChatHeader.css";
import HeaderProfile from "./HeaderProfile";

const ChatHeader = (props) => {
  return (
    <div className="chat-header">
      <div className="header-item">
        <img className="header-logo" src="img/cm_logo.png" />
        <HeaderProfile username={props.username} />
      </div>
    </div>
  );
};

export default ChatHeader;
