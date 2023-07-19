<<<<<<< HEAD
import './App.css';

function App() {
    return (
        <div className="App">
            <form>
                <div id="login">Log In</div>
                로그인 후 Bad News를 더욱 편리하게 사용하세요!
                <div>
                    <label>ID</label>
                    <input type="text"></input>
                    <label>ID</label>
                    <input type="text"></input>
                </div>
                <button className="btn">로그인</button>
            </form>
        </div>
    );
=======
import logo from './logo.svg';
import './App.css';

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
        <strong id="title">Log In</strong>
        <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
        <br/>

        <Table/>
        <br/>
        <LoginBtn/>

      </form>
      
    </div>
  );
>>>>>>> c59168abf7d29f699cb1bf021ed60456c37306ca
}

export default App;
