import React, { useState } from "react";
import classes from "./LoginModal.module.css";
import ReactDOM from "react-dom";
import Button from "./Button";

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const setUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onlogin(enteredUsername);
  };
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">아이디</label>
          <input
            id="username"
            onChange={setUsernameHandler}
            value={enteredUsername}
          />
          <Button type="submit">로그인</Button>
        </form>
      </div>
    </div>
  );
};

const LoginModal = (props) => {
  const portalId = document.getElementById("modal");
  return (
    <div>
      {ReactDOM.createPortal(<BackDrop />, portalId)}
      {ReactDOM.createPortal(<Modal onlogin={props.onlogin} />, portalId)}
    </div>
  );
};

export default LoginModal;
