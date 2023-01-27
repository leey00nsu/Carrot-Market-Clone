import "./HeaderChat.css";
import { Link } from "react-router-dom";

const HeaderChat = () => {
  return (
    <Link to="/chat" type="button" className="header-chat">
      채팅하기
    </Link>
  );
};

export default HeaderChat;
