import './Login.css';

const styles = {
  textBlock: {
    paddingLeft: '5px',
  },
}

const TextBlock = () => {
  return <div style={styles.textBlock}>
    <strong className="title">Log In</strong>
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

function saveAndSend() {
  // 변수에 인풋값 저장
  const idValue = document.getElementById('id').value;
  const pwValue = document.getElementById('pw').value;
  const data = {
    id: idValue,
    pw: pwValue
  };

  const url = 'http://localhost:8080/login'; // 서버의 엔드포인트 URL
  
  // 서버로 값을 전송하는 코드를 작성합니다.
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      // 서버의 응답을 처리합니다.
      console.log(result);
    })
    .catch(error => {
      // 에러 처리를 합니다.
      console.error('Error: User 정보가 없습니다. ', error);
    });

}

const LoginBtn = () => {
  return <div className="login-btn-outer">
    <button className="login-btn" onClick="saveAndSend(event)">로그인</button>
  </div>
}

function App() {
  return (
    <div className="App">
      <div className="container">
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

export default App;
