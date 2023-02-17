import ChatRoom from "../../components/chatroom/ChatRoom";
import ChatHeader from "../../components/header/ChatHeader/ChatHeader";
import "./Chat.css";
import LoginModal from "../../components/UI/LoadingModal";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useSelector } from "react-redux";
const Chat = () => {
  const [isLogin, setIsLogin] = useState(false);
  const username = useSelector((state) => state.username);

  const content = (
    <>
      <ChatHeader username={username} />
      <div className="pages">
        <ChatRoom username={username} />
      </div>
    </>
  );

  return <>{content}</>;
};

export default Chat;
