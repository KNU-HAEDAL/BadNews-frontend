import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TextBlock = () => {
    return (
        <div style={{ paddingLeft: '5px' }}>
            <strong className="login-title">Sign Up</strong>
            <div className="txt">회원가입 후 Bad News를 더욱 편리하게 사용해보세요!</div>
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
        // 변수에 인풋값 저장
        const idValue = document.getElementById('id').value;
        const pwValue = document.getElementById('pw').value;
        // const data = {
        //     id: idValue,
        //     pw: pwValue,
        // };

        // 서버로 회원가입 요청
        axios
            .post('http://13.124.161.27:8080/signup', {
                id: idValue,
                password: pwValue,
            })
            //성공시 then 실행
            .then(function (response) {
                console.log(response.data);
            })
            //실패 시 catch 실행
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="login-btn-container">
            <table className="login-btn-table">
                <tr>
                    <button className="login-btn" onClick={saveAndSend}>
                        회원가입
                    </button>
                </tr>
                <tr>
                    <div className="small-txt">
                        이미 계정이 있으신가요?{' '}
                        <Link to="/login" className="link-style">
                            로그인
                        </Link>
                    </div>
                </tr>
            </table>
        </div>
    );
};

const Signup = () => {
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

export default Signup;
