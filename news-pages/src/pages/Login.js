import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [login, setLogin] = useState(false);

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
          setLogin(true);
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
      <div className="input-table-outer">
        <form>
          <TextBlock />
          <br />
          <br />
          <InputTable
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
    </div>
  );
}

const InputTable = ({ handleIdChange, handlePwChange }) => {
  return (
    <div className="input-table-container">
      <table className="input-table">
        <tbody>
          <tr>
            <td>
              <input
                id="id"
                type="text"
                placeholder="사용자 이름"
                onChange={handleIdChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                id="pw"
                type="password"
                placeholder="비밀번호"
                onChange={handlePwChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TextBlock = () => {
  return (
    <div style={{ paddingLeft: "5px" }}>
      <strong className="login-title">로그인</strong>
      <div className="txt">
        로그인 후 Bad News를 더욱 편리하게 사용해보세요!
      </div>
    </div>
  );
};

const LoginBtn = ({ idValue, pwValue, handleLogin }) => {
  return (
    <div className="login-btn-outer">
      <button className="login-btn" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};