import './Login.css';
import './Signup';
import logo from '../logo.png';
import { Link } from "react-router-dom";


const logoStyle = {
    width: '4rem',
    height: '4rem',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const textStyle1 = {
    color: '#0357ff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '0.3rem',
}

const textStyle2 = {
    fontSize: '1.1rem',
    lineHeight: '1.8rem',
    color: 'black',
}

const CompleteSignup = () => {
    return (
        <div className="Login">
            <img src={logo} alt="Bad News logo" style={ logoStyle } />
            <div style={ textStyle1 }>회원가입이 완료되었습니다!</div>
            <div style={{ ...textStyle2, marginBottom: '4rem' }}>ㅇㅇ님, 환영합니다. </div>
            <Link to="/login" style={ textStyle2 }>로그인하고 Bad News 이용하기</Link>
        </div>
    );
};

export default CompleteSignup;