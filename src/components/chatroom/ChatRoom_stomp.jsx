import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import "./ChatRoom.css";
import ChatDetail from "./ChatDetail";
import * as StompJs from "@stomp/stompjs";
import Button from "../UI/Button";

// 채팅할 상대가 없을 때 표시되는 아이콘 svg
const chatlogo = (
  <svg
    width="96"
    height="81"
    viewBox="0 0 96 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.0004 0C15.0185 0 0 13.0729 0 29.6567C0 40.358 6.27606 49.642 15.5279 54.8364L13.8397 64.5305C13.7353 65.1299 13.928 65.7446 14.3535 66.1751L14.3573 66.179L14.3724 66.1939C14.3853 66.2066 14.4061 66.2267 14.4326 66.2506C14.4869 66.2995 14.568 66.3668 14.6744 66.435C14.9082 66.5849 15.1569 66.6709 15.3962 66.7073C15.7666 66.7637 16.0661 66.6901 16.1358 66.673L16.1413 66.6716C16.3174 66.6287 16.5003 66.558 16.6232 66.51C16.9302 66.3901 17.5014 66.1524 18.5787 65.6955C20.7218 64.7866 24.9636 62.9696 33.3799 59.3641C51.1931 59.1817 66.0008 46.1763 66.0008 29.7093C66.0008 13.1297 50.987 0 33.0004 0Z"
      fill="#DCDEE3"
    ></path>
    <path
      d="M72.2312 29.4385C72.2312 48.2002 56.7085 62.679 37.8858 64.8408C44.0168 70.067 52.3818 73.2792 61.479 73.3633C70.2216 76.9749 74.6257 78.7941 76.8498 79.7036C77.9674 80.1606 78.5583 80.3977 78.8749 80.517C79.0036 80.5654 79.1863 80.6333 79.3599 80.6741L79.3652 80.6754C79.4339 80.6917 79.7238 80.7604 80.0821 80.7078C80.313 80.6739 80.5564 80.5935 80.7883 80.4501C80.8943 80.3846 80.9756 80.3195 81.0307 80.2717C81.0459 80.2585 81.0593 80.2464 81.0704 80.2362C81.0789 80.2284 81.0861 80.2217 81.0918 80.2163L81.1071 80.2017L81.111 80.1978C81.5557 79.764 81.7577 79.1325 81.6467 78.5179L79.9012 68.8524C89.4699 63.674 96 54.3943 96 43.6557C96 29.1206 84.0984 17.353 68.7254 14.6059C70.9682 19.0808 72.2312 24.0881 72.2312 29.4385Z"
      fill="#DCDEE3"
    ></path>
  </svg>
);

const ChatRoom = (props) => {
  const [enteredChatUsername, setEnteredChatUsername] = useState("");
  const [chatId, setChatId] = useState("0");
  const [chats, setChats] = useState([
    { sender: "userName", message: "hi", date: "2023-01-20" },
    {
      sender: "test1",
      message: "hiasdsasdaddss",
      date: "2023-01-20",
    },
    { sender: "test1", message: "hi", date: "2023-01-20" },
  ]);
  const client = useRef({});

  const [chatList, setChatList] = useState([]);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://localhost:30002/ws",
      debug: function (str) {
        console.log(str); 
      },
      onConnect: () => {
        console.log("success");
        subscribe();
      },
    });
    client.current.activate();
  };

  client.current.onConnect = function (frame) {
    console.log(frame);
  };

  const subscribe = () => {
    client.current.subscribe("/sub/chat/{roomId}", ({ body }) => {
      console.log(body);
      setChats((chats) => [...chats, JSON.parse(body)]);
    });
  };

  const publish = (message) => {
    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({ chatId: chatId, message }),
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const setChatIdHandler = (chatId) => {
    setChatId(chatId);
  };

  const addChatsHandler = (message) => {
    // publish(message);
    setChats((chats) => [...chats, message]);
  };

  const chatUsernameHandler = (e) => {
    setEnteredChatUsername(e.target.value);
  };

  const addChatListHandler = () => {
    const newChat = {
      id: chatList.length + 1,
      date: "2023-01-20",
      username: enteredChatUsername,
      lastchat: "blank",
    };
    setChatList((prev) => [...prev, newChat]);
  };

  useEffect(() => {
    connect();

    console.log("connetion");

    return () => disconnect();
  }, []);

  return (
    <div className="chatroom">
      <div className="chatroom-item">
        <div className="chatroom-profile"></div>
        <div className="chatroom-list">
          <div className="chatroom-list-username">
            <input value={enteredChatUsername} onChange={chatUsernameHandler} />
            <Button onClick={addChatListHandler}>대화</Button>
          </div>
          <div className="chatroom-list-unread">안읽은 메세지만 보기</div>
          <div className="chatroom-list-list">
            <ChatList chatList={chatList} onSetchatId={setChatIdHandler} />
          </div>
          <div className="chatroom-list-faq">자주묻는 질문</div>
        </div>
        <div className="chatroom-chat">
          {chatId != 0 ? (
            <ChatDetail
              username={props.username}
              chats={chats}
              chatId={chatList[chatId - 1].username}
              sendMessage={addChatsHandler}
            />
          ) : (
            chatlogo
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
