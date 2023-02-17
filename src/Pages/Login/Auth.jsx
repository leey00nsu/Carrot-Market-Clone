import React from "react";
import Header from "../../components/header/DefaultHeader/Header";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";
import LoadingModal from "../../components/UI/LoadingModal";
import axios from "axios";
import { useCookies } from "react-cookie";
import { FIREBASE_URL } from "../../secret";

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState("login");
  const [enteredId, setEnteredId] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputCleanUp = () => {
    setEnteredId("");
    setEnteredPassword("");
    setEnteredPasswordConfirm("");
  };

  const errorCleanUp = () => {
    setIdError("");
    setPasswordError("");
    setPasswordConfirmError("");
  };

  const idChangeHandler = (e) => {
    setEnteredId(e.target.value);
    setIdError("");
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const passwordConfirmChangeHandler = (e) => {
    setEnteredPasswordConfirm(e.target.value);
  };

  const signupHandler = () => {
    errorCleanUp();
    let isError = false;
    const signup = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_URL}`,
          {
            email: enteredId,
            password: enteredPassword,
            returnSecureToken: true,
          },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
        setFormState("signupDone");
      } catch (error) {
        const message = error.response.data.error.message;
        console.log(message);
        if (message === "EMAIL_EXISTS") {
          setIdError("이미 존재하는 아이디입니다.");
        }
      }
      setIsLoading(false);
    };
    if (enteredId.length === 0) {
      setIdError("아이디를 입력해주세요.");
      isError = true;
    }

    let email_format =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!email_format.test(enteredId)) {
      setIdError("아이디는 이메일 형식이여야 합니다.");
      isError = true;
    }
    if (enteredPassword.length === 0) {
      setPasswordError("비밀번호를 입력해주세요.");
      isError = true;
    }
    if (enteredPasswordConfirm.length === 0) {
      setPasswordConfirmError("비밀번호 확인을 입력해주세요.");
      isError = true;
    }
    if (enteredPassword.length < 6) {
      setPasswordError("비밀번호는 6자리 이상이여야 합니다.");
      isError = true;
    }
    if (enteredPassword !== enteredPasswordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      isError = true;
    }

    if (!isError) {
      signup();
    }
  };

  const loginHandler = () => {
    errorCleanUp();
    let isError = false;
    const login = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_URL}`,
          {
            email: enteredId,
            password: enteredPassword,
            returnSecureToken: true,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        // console.log(response.data);
        const token = response.data.idToken;
        const refreshToken = response.data.refreshToken;
        // 로그인 완료 토큰 저장
        setCookie("refreshToken", refreshToken, {
          path: "/",
        });
        localStorage.setItem("token", token);
        // dispatch(authActions.login({ token: token }));
      } catch (error) {
        const message = error.response.data.error.message;
        console.log(message);
        if (message === "EMAIL_NOT_FOUND" || message === "INVALID_PASSWORD") {
          setPasswordError("잘못된 유저 정보입니다.");
        }
      }
      setIsLoading(false);
    };

    if (enteredId.length === 0) {
      setIdError("아이디를 입력해주세요.");
      isError = true;
    }
    let email_format =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!email_format.test(enteredId)) {
      setIdError("아이디는 이메일 형식이여야 합니다.");
      isError = true;
    }

    if (enteredPassword.length === 0) {
      setPasswordError("비밀번호를 입력해주세요.");
      isError = true;
    }

    if (!isError) {
      login();
    }
  };

  const switchFormHandler = () => {
    inputCleanUp();
    errorCleanUp();
    if (formState === "login") {
      setFormState("signup");
    } else {
      setFormState("login");
    }
  };

  let content;

  if (formState === "login") {
    content = (
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="id">아이디</label>
        <input
          type="email"
          onChange={idChangeHandler}
          value={enteredId}
          className={classes["form__input"]}
          id="id"
        />
        <p className={classes["form__text--error"]}>{idError}</p>

        <label htmlFor="password">비밀번호</label>
        <input
          onChange={passwordChangeHandler}
          value={enteredPassword}
          className={classes["form__input"]}
          id="password"
        />
        <p className={classes["form__text--error"]}>{passwordError}</p>

        <Button onClick={loginHandler}>로그인</Button>
        <div className={classes["form__gap"]}></div>
        <Button onClick={switchFormHandler}>회원가입</Button>
      </form>
    );
  } else if (formState === "signup") {
    content = (
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="id">아이디</label>
        <input
          type="email"
          onChange={idChangeHandler}
          value={enteredId}
          className={classes["form__input"]}
          id="id"
        />
        <p className={classes["form__text--error"]}>{idError}</p>
        <label htmlFor="password">비밀번호</label>
        <input
          onChange={passwordChangeHandler}
          value={enteredPassword}
          className={classes["form__input"]}
          id="password"
        />
        <p className={classes["form__text--error"]}>{passwordError}</p>

        <label htmlFor="password">비밀번호 확인</label>
        <input
          onChange={passwordConfirmChangeHandler}
          value={enteredPasswordConfirm}
          className={classes["form__input"]}
          id="passwordConfirm"
        />
        <p className={classes["form__text--error"]}>{passwordConfirmError}</p>
        <Button onClick={signupHandler}>회원가입</Button>
        <div className={classes["form__gap"]}></div>
        <Button onClick={switchFormHandler}>취소</Button>
      </form>
    );
  } else if (formState === "signupDone") {
    content = (
      <>
        <p>회원가입이 완료되었습니다!</p>
        <div className={classes["form__gap"]}></div>
        <Button>홈으로</Button>
      </>
    );
  }
  return (
    <>
      {isLoading && <LoadingModal />}
      <Header />
      <article className={classes.content}>{content}</article>
    </>
  );
};

export default Auth;
