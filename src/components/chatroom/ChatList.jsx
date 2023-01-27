import "./ChatList.css";

const ChatList = (props) => {
  const onSetchatIdHandler = (chatId) => {
    // console.log(e);
    props.onSetchatId(chatId);
  };
  return (
    <>
      {props.chatList.map((chat) => (
        <div
          key={chat.id}
          className="chatlist-box"
          onClick={() => {
            onSetchatIdHandler(chat.id);
          }}
        >
          <div className="chatlist-item">
            <div className="chatlist-profile-box">
              <img className="chatlist-profile" src="img/profile_default.png" />
            </div>
            <div className="chatlist-info">
              <div className="chatlist-info-top">
                <div className="chatlist-info-username">{chat.username}</div>
                <div>{chat.date}</div>
              </div>
              <div className="chatlist-info-chat">{chat.lastchat}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatList;
