import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <h4 id="title">Log In</h4>
        <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
        

        <div>
          <label className="txt">ID </label><input type="text"></input>
          <label className="txt">PW </label><input type="password"></input>
        </div>

        <button className="btn">로그인</button>
      </form>
      
    </div>
  );
}

export default App;
