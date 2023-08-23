import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const TextBlock = () => {
    return (
        <div style={{paddingLeft: '5px'}}>
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
        // 변수에 인풋값 저장
        const idValue = document.getElementById('id').value;
        const pwValue = document.getElementById('pw').value;
        // const data = {
        //     id: idValue,
        //     pw: pwValue,
        // };

        // 서버로 로그인 요청
        axios
            .post('http://13.124.161.27:8080/login', {
                id: idValue,
                password: pwValue,
            })
            //성공 시 then 실행
            .then(function (response) {
                if (response.data.result) {
                    console.log(`${response.data.id}님 환영합니다`);
                    navigate("/");
                } else {
                    console.log(`로그인 실패. 다시 시도하세요.`)
                }
                console.log(response.data);
                navigate("/"); // root로 이동
            })
            //실패 시 catch 실행
            .catch(function (error) {
                console.log(`다시 시도하세요.`);
            });
    
        // 서버로 로그인 요청
        // fetch('http://13.124.161.27:8080/login', 
        //     { method: 'POST',
        //     headers: { 'Content-Type': 'application/json', },
        //     body: JSON.stringify( { id: idValue, password: pwValue } ), }
        // )
        //     .then((response) => response.json()) // 서버로부터의 응답을 파싱하고, data라는 변수에 담음
        //     .then((data) => {
        //         // console.log(data); // 응답 출력. 확인용
        //         if (data.result) {
        //             alert(`${data.id}님 환영합니다`);
        //             navigate("/"); // root로 이동
        //         } 
        //         else {
        //             alert(`다시 시도하세요`);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error: User 정보가 없습니다. ', error);
        //     });
    }

    return (
        <div className="login-btn-container">
             <table className="login-btn-table">
                <tr>
                    <button className="login-btn" onClick={saveAndSend}>로그인</button>
                </tr>
                <tr>
                    <div className="small-txt">아직 계정이 없으신가요? <Link to="/signup" className="link-style">회원가입</Link></div>
                </tr>
            </table>
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
