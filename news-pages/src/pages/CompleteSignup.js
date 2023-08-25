import './Login.css';
import './Signup';
import { useNavigate, Link } from "react-router-dom";

const textStyle = {
    lineHeight: '2rem',
    color: '#0357ff',
    fontSize: '1.8rem',

}

const textStyle2 = {
    lineHeight: '1.5rem',
    color: 'black',
}


const CompleteSignup = () => {
    return (
        <div className="Login">
            <div style={textStyle}>회원가입이 완료되었습니다!</div>
            <div style={textStyle2}>ㅇㅇ님, 환영합니다. </div>
            <Link to="/login" style={textStyle2}>로그인하고 Bad News 이용하기</Link>
        </div>
    );
};

export default CompleteSignup;