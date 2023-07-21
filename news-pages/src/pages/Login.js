import './Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";


const styles = {
  textBlock: {
    paddingLeft: '5px',
  },
}

const TextBlock = () => {
  return <div style={styles.textBlock}>
    <strong className="login-title">Log In</strong>
    <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
  </div>
}

const Table = () => {
  return <div className="input-table-outer">
    <table className="input-table">
      <tr>
        {/* <th><label className="txt">ID</label></th> */}
        <td><input id="id" type="text" placeholder="User name"></input></td>
      </tr>
      <tr>
        {/* <th><label className="txt">PW</label></th> */}
        <td><input id="pw" type="password" placeholder="Password"></input></td>
      </tr>
    </table>
  </div>
}

function saveAndSend (){
    //event.preventDefault();

  // 변수에 인풋값 저장
  const idValue = document.getElementById('id').value;
  const pwValue = document.getElementById('pw').value;
  const data = {
    id: idValue,
    pw: pwValue
  };

  
  // // 서버로 값을 전송하는 코드
  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  //   .then(response => response.json())
  //   .then(result => {
  //     // 서버의 응답을 처리합니다.
  //     console.log(result);
  //   })
  //   .catch(error => {
  //     // 에러 처리
  //     console.error('Error: User 정보가 없습니다. ', error);
  //   });

  alert("Test")

  axios.post('http://localhost:8080/signup',{
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

}

const LoginBtn = () => {
  return ( 
  <div className="login-btn-outer">
    <button className="login-btn" onClick={saveAndSend}>
        <Link to="/" className="styled-link">로그인</Link>
    </button>
  </div>
  );
}

const Login = () => {
  return (
    <div className="Login">
      <div className="input-container">
        <form>
          <TextBlock/>
          <br/><br/>
          <Table/>
          <br/>
          <LoginBtn/>
        </form>
      </div>
    </div>
  );
}

export default Login;
