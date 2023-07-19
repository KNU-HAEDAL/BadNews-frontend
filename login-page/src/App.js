import './App.css';

function TextBlock() {
  return <div>
    <strong id="title">Log In</strong>
    <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
  </div>
}

function Table() {
  return <table className="input-id-pw">
  <tr>
    <th><label className="txt" value="ID">ID</label></th>
    <th><input type="text"></input></th>
  </tr>
  <tr>
    <th><label className="txt">PW</label></th>
    <th><input type="password"></input></th>
  </tr>
</table>
}

function LoginBtn() {
  return <button className="login-btn">로그인</button>
}

function App() {
  return (
    <div className="App">
      <div className="login-box">
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
