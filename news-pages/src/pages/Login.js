import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setLogout } from "../modules/counter";

export default function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  //   const [login, setLogin] = useState(false);

  const login = useSelector((state) => state.counter.login);
  const dispatch = useDispatch();

  const handleIdChange = (event) => {
    setIdValue(event.target.value);
    console.log(event.target.value);
  };

  const handlePwChange = (event) => {
    setPwValue(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // 이벤트의 기본 동작(새로고침) 막기

    const datas = {
      id: idValue,
      password: pwValue,
    };

    axios
      .post("http://13.124.161.27:8080/login", datas, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.result === true) {
          alert("id: " + datas.id + "님 반갑습니다");
          //   setLogin(true);
          dispatch(setLogin());
          navigate("/", { state: { isLoggedIn: true } });
        } else {
          alert("id: " + datas.id + " 유저가 없습니다.");
        }
      })
      .catch((error) => {
        console.error("Error: User 정보가 없습니다. ", error);
      });
  };

  return (
    <div className="Login">
      <form className="input-outer">
        <TextBlock />
        <br />
        <br />
        <Input
          handleIdChange={handleIdChange}
          handlePwChange={handlePwChange}
        />
        <br />
        <LoginBtn
          idValue={idValue}
          pwValue={pwValue}
          handleLogin={handleLogin}
        />
      </form>
    </div>
  );
}

const Input = ({ handleIdChange, handlePwChange }) => {
  return (
    <div className="input-container">
      <input
        id="id"
        type="text"
        placeholder="User name"
        onChange={handleIdChange}
      />
      <input
        id="pw"
        type="password"
        placeholder="Password"
        onChange={handlePwChange}
      />
    </div>
  );
};

const TextBlock = () => {
  return (
    <div style={{ paddingLeft: "1.8rem" }}>
      <strong className="login-title">Log In</strong>
      <div className="txt">
        로그인 후 Bad News를 더욱 편리하게 사용해보세요!
      </div>
    </div>
  );
};

const LoginBtn = ({ idValue, pwValue, handleLogin }) => {
  return (
    <div className="login-btn-container">
      <button className="login-btn" onClick={handleLogin}>
        로그인
      </button>
      <div className="small-txt">
        아직 계정이 없으신가요?{" "}
        <Link to="/signup" className="link-style">
          회원가입
        </Link>
      </div>
    </div>
  );
};
