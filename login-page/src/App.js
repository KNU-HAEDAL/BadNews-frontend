import './App.css';

function TextBlock() {
  return <div>
    <strong className="title">Log In</strong>
    <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
  </div>
}

function Table() {
  return <div className="input-table">
    <table>
      <tr>
        <th><label className="txt">ID</label></th>
        <th><input type="text"></input></th>
      </tr>
      <tr>
        <th><label className="txt">PW</label></th>
        <th><input type="password"></input></th>
      </tr>
    </table>
  </div>
}

function LoginBtn() {
  return <div className="login-btn-outer">
    <button className="login-btn">로그인</button>
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
