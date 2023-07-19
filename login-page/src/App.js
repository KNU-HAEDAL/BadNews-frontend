import './App.css';

function LoginBlock() {
  return <div>
    <strong id="title">Log In</strong>
    <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
  </div>
}

function Table() {
  return <table>
  <tr>
    <th><label className="txt">ID</label></th>
    <th><input type="text"></input></th>
  </tr>
  <tr>
    <th><label className="txt">PW</label></th>
    <th><input type="password"></input></th>
  </tr>
</table>
}

function LoginBtn() {
  return <button className="btn">로그인</button>
}

function App() {
  return (
    <div className="App">
      <form>
        <LoginBlock/>
        <br/>
        <Table/>
        <br/>
        <LoginBtn/>
      </form>
      
    </div>
  );
}

export default App;
