import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Chat from "./Pages/Chat/Chat";
import Article from "./Pages/Article/Article";
import Auth from "./Pages/Login/Auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FIREBASE_URL } from "./secret";
import axios from "axios";
import { useCookies } from "react-cookie";
import { authActions } from "./store";
import LoadingModal from "./components/UI/LoadingModal";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const token = localStorage.getItem("token");
  const refreshToken = cookies.refreshToken;

  useEffect(() => {
    navigate("/");
    if (refreshToken) {
      setIsLoading(true);
      // 리프레시 토큰으로 토큰을 재발급
      const getToken = async () => {
        try {
          const response = await axios.post(
            `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_URL}`,
            {
              grant_type: "refresh_token",
              refresh_token: refreshToken,
            },
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );

          const newToken = response.data.id_token;
          localStorage.setItem("token", newToken);
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      };

      // 토큰으로 유저정보 가져오기
      const fetchUser = async () => {
        try {
          const response = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_URL}`,
            {
              idToken: token,
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          //유저 로그인 완료
          console.log(response.data.users[0].email);
          dispatch(authActions.login());
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      };

      if (!token) {
        getToken();
      }
      fetchUser();
    } else {
      dispatch(authActions.logout());
      setIsLoading(false);
    }
  }, [token]);
  return (
    <div className="main">
      {isLoading && <LoadingModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
