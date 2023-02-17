import "./ChatDetail.css";
import ChatInput from "./ChatInput";
import { useRef, useEffect } from "react";
import ProfileIcon from "../UI/ProfileIcon";

const ChatDetail = (props) => {
  const scrollRef = useRef(null);

  const scrollHandler = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollHandler();
  }, [props.chats]);

  // 이전 메시지와 발송인이 같으면 메시지 옆에 아이콘을 보이지 않음
  let prevSender = null;
  const chats = props.chats.map((chat, index) => {
    let result = "";
    if (chat.sender == props.username)
      result = (
        <div key={index} className="chatdetail-chat-box-my">
          <article>{chat.message}</article>
        </div>
      );
    else {
      if (chat.sender !== prevSender) {
        result = (
          <div key={index} className="chatdetail-chat-box-other">
            <ProfileIcon />
            <article>{chat.message}</article>
          </div>
        );
      } else {
        result = (
          <div key={index} className="chatdetail-chat-box-other">
            <ProfileIcon hide />
            <article>{chat.message}</article>
          </div>
        );
      }
    }
    prevSender = chat.sender;
    return result;
  });
  return (
    <div className="chatdetail">
      <div className="chatdetail-header">
        <ProfileIcon />
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
