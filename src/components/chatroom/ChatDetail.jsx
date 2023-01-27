import "./ChatDetail.css";
import ChatInput from "./ChatInput";
import { useRef } from "react";

const ChatDetail = (props) => {
  const scrollRef = useRef();
  const chats = props.chats.map((chat, index) => {
    if (chat.sender == props.username)
      return (
        <div key={index} className="chatdetail-chat-box-my">
          <div>{chat.message}</div>
        </div>
      );
    else
      return (
        <div key={index} className="chatdetail-chat-box-other">
          <section className="chatlist-profile-box">
            <img className="chatlist-profile" src="img/profile_default.png" />
          </section>
          <div>{chat.message}</div>
        </div>
      );
  });
  return (
    <div className="chatdetail">
      <div className="chatdetail-header">
        <div className="header-profile-box">
          <img className="header-profile" src="img/profile_default.png" />
        </div>
        <div className="header-profile-username">{props.chatId}</div>
      </div>
      <div ref={scrollRef} className="chatdetail-chat">
        {chats}
      </div>
      <div className="chatdetail-footer">
        <ChatInput username={props.username} sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

export default ChatDetail;
