import "./ChatHeader.css";
import ChatHeaderProfile from "./ChatHeaderProfile";
import { Link } from "react-router-dom";

const ChatHeader = (props) => {
  return (
    <div className="chat-header">
      <div className="header-item">
        <Link to="/" className="header-logo">
          <img className="header-logo" src="img/cm_logo.png" />
        </Link>
        <ChatHeaderProfile username={props.username} />
      </div>
    </div>
  );
};

export default ChatHeader;
