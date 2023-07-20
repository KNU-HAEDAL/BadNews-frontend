import './App.css';

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

  // 서버로 값을 전송하는 코드를 작성합니다.
  // 이 부분에서는 AJAX 요청이나 Fetch API 등을 사용하여 서버에 데이터를 전송할 수 있습니다.
}

const LoginBtn = () => {
  return <div className="login-btn-outer">
    <button className="login-btn" onClick="saveAndSend()">로그인</button>
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
