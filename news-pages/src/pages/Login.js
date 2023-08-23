import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TextBlock = () => {
    return (
        <div style={{ paddingLeft: '5px' }}>
            <strong className="login-title">Log In</strong>
            <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용해보세요!</div>
        </div>
    );
};

const InputTable = () => {
    return (
        <div className="input-table-container">
            <table className="input-table">
                <tr>
                    {/* <th><label className="txt">ID</label></th> */}
                    <td>
                        <input id="id" type="text" placeholder="User name"></input>
                    </td>
                </tr>
                <tr>
                    {/* <th><label className="txt">PW</label></th> */}
                    <td>
                        <input id="pw" type="password" placeholder="Password"></input>
                    </td>
                </tr>
            </table>
        </div>
    );
};

const LoginBtn = () => {
    const navigate = useNavigate();

    const saveAndSend = () => {
        //event.preventDefault();

        // 변수에 인풋값 저장
        const idValue = document.getElementById('id').value;
        const pwValue = document.getElementById('pw').value;
        const data = {
            id: idValue,
            pw: pwValue,
        };

        // 서버로 회원가입 요청
        axios
            .post('http://localhost:8080/signup', {
                id: idValue,
                password: pwValue,
            })
            //성공 시 then 실행
            .then(function (response) {
                console.log(response.data);
            })
            //실패 시 catch 실행
            .catch(function (error) {
                console.log('Error: 회원 가입 실패. 다시 시도하세요. ', error);
            });

        // 서버로 로그인 요청
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result == true) {
                    alert(`${idValue}님 환영합니다`);
                    navigate('/'); // root로 이동
                } else {
                    alert('로그인 실패');
                }
            })
            .catch((error) => {
                console.error('Error: User 정보가 없습니다. ', error);
            });

        // alert(`${idValue}님 환영합니다`);
        // navigate("/"); // root로 이동
    };

    return (
        <div className="login-btn-outer">
            <button className="login-btn" onClick={saveAndSend}>
                로그인
                {/* <Link to="/" className="styled-link">로그인</Link> */}
            </button>
        </div>
    );
};

const Login = () => {
    return (
        <div className="Login">
            <div className="input-table-outer">
                <form>
                    <TextBlock />
                    <br />
                    <br />
                    <InputTable />
                    <br />
                    <LoginBtn />
                </form>
            </div>
        </div>
    );
};

export default Login;
