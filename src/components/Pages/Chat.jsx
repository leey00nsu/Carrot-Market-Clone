import ChatRoom from "../chatroom/ChatRoom";
import ChatHeader from "../header/ChatHeader";
import "./Chat.css";
import LoginModal from "../UI/LoginModal";
import { useState, useEffect } from "react";

const Chat = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const sessionIsLogin = sessionStorage.getItem("isLogin");

    console.log(sessionIsLogin);

    if (sessionIsLogin != null) {
      setIsLogin(true);
      setUsername(sessionIsLogin);
    }
  }, []);

  const loginHandler = (username) => {
    sessionStorage.setItem("isLogin", username);
    setIsLogin(true);
    setUsername(username);
  };

  return (
    <>
      {!isLogin && <LoginModal onlogin={loginHandler} />}
      <ChatHeader username={username} className="header" />
      <div className="pages">
        <ChatRoom username={username} />
      </div>
    </>
  );
};

export default Chat;
