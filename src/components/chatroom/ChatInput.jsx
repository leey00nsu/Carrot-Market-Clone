import "./ChatInput.css";
import { useState } from "react";

const ChatInput = (props) => {
  const [message, setMessage] = useState("");

  const setMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
    let today = new Date();
    e.preventDefault();
    // console.log(message);
    if (message != "") {
      props.sendMessage({
        sender: props.username,
        message: message,
        date: today,
      });
    }
  };
  return (
    <div className="chatinput">
      <textarea
        className="chatinput-bar"
        type="text"
        placeholder="메세지를 입력해주세요."
        onChange={setMessageHandler}
      ></textarea>
      <div className="chatinput-button">
        <button
          onClick={sendMessageHandler}
          type="button"
          className="chatinput-button-send "
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
