import ChatRoom from "../../components/chatroom/ChatRoom";
import ChatHeader from "../../components/header/ChatHeader/ChatHeader";
import "./Chat.css";
import LoginModal from "../../components/UI/LoadingModal";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const Chat = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const sessionIsLogin = sessionStorage.getItem("isLogin");

    console.log(sessionIsLogin);

    if (sessionIsLogin != null) {
      setIsLogin(true);
      setUsername(sessionIsLogin);
    }

    setIsLoading(false);
  }, []);

  const loginHandler = (username) => {
    sessionStorage.setItem("isLogin", username);
    setIsLogin(true);
    setUsername(username);
  };

  let content = <LoadingSpinner />;

  if (!isLoading) {
    content = (
      <>
        <ChatHeader username={username} />
        <div className="pages">
          <ChatRoom username={username} />
        </div>
      </>
    );
  }

  return (
    <>
      {/* {!isLogin && !isLoading && <LoginModal onlogin={loginHandler} />} */}
      {content}
    </>
  );
};

export default Chat;
