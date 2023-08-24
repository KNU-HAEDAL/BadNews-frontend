import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const InputTable = ({ handleIdChange, handlePwChange }) => {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');

    const handleLogin = () => {
        const datas = {
            id: idValue,
            pw: pwValue,
        };
    };

    return (
        <div className="input-table-container">
            <table className="input-table">
                <tr>
                    {/* <th><label className="txt">ID</label></th> */}
                    <td>
                        <input id="id" type="text" placeholder="User name" onChange={handleIdChange}></input>
                    </td>
                </tr>
                <tr>
                    {/* <th><label className="txt">PW</label></th> */}
                    <td>
                        <input id="pw" type="password" placeholder="Password" onChange={handlePwChange}></input>
                    </td>
                </tr>
            </table>
        </div>
    );
};

const TextBlock = () => {
    return (
        <div style={{ paddingLeft: '5px' }}>
            <strong className="login-title">Log In</strong>
            <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용해보세요!</div>
        </div>
    );
};

const LoginBtn = ({ idValue, pwValue }) => {
    const handleLogin = () => {
        const datas = {
            id: idValue,
            pw: pwValue,
        };

        axios
            .post('http://13.124.161.27:8080/login', datas, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.data)
            .then((result) => {
                if (result === true) {
                    alert(`${idValue}님 환영합니다`);
                    // 여기에서 로그인 성공 시의 동작을 정의합니다.
                } else {
                    alert('로그인 실패');
                }
            })
            .catch((error) => {
                console.error('Error: User 정보가 없습니다. ', error);
            });
    };

    return (
        <div className="login-btn-outer">
            <button className="login-btn" onClick={handleLogin}>
                로그인
            </button>
        </div>
    );
};

const Login = () => {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');

    const handleIdChange = (event) => {
        setIdValue(event.target.value);
    };

    const handlePwChange = (event) => {
        setPwValue(event.target.value);
    };
    return (
        <div className="Login">
            <div className="input-table-outer">
                <form>
                    <TextBlock />
                    <br />
                    <br />
                    <InputTable handleIdChange={handleIdChange} handlePwChange={handlePwChange} />
                    <br />
                    <LoginBtn idValue={idValue} pwValue={pwValue} />
                </form>
            </div>
        </div>
    );
};

export default Login;

// const LoginBtn = () => {
//   const [idValue, setIdValue] = useState("");
//   const [pwValue, setPwValue] = useState("");

//   const datas = {
//     id: idValue,
//     pw: pwValue,
//   };

//   const handleIdChange = (event) => {
//     setIdValue(event.target.value);
//     console.log(event.target.value);
//   };

//   const handlePwChange = (event) => {
//     setPwValue(event.target.value);
//     console.log(event.target.value);
//   };

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     axios
//       .post("http://13.124.161.27:8080/login", datas, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => response.data)
//       .then((result) => {
//         if (result === true) {
//           alert(`${idValue}님 환영합니다`);
//           // navigate("/")로의 이동은 해당 코드 컨텍스트에 따라 구현되어야 합니다.
//         } else {
//           alert("로그인 실패");
//         }
//       })
//       .catch((error) => {
//         console.error("Error: User 정보가 없습니다. ", error);
//       });
//   };

//   return (
//     <div className="login-btn-outer">
//       <button className="login-btn" onClick={handleLogin}>
//         로그인
//         {/* <Link to="/" className="styled-link">로그인</Link> */}
//       </button>
//     </div>
//   );
// };

// const Login = () => {
//   return (
//     <div className="Login">
//       <div className="input-table-outer">
//         <form>
//           <TextBlock />
//           <br />
//           <br />
//           <InputTable />
//           <br />
//           <LoginBtn />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
