import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <strong id="title">Log In</strong>
        <div className="txt">로그인 후 Bad News를 더욱 편리하게 사용하세요!</div>
        <br/><br/>

        <div >
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
          <br/>
          
          <button className="btn">로그인</button>
        </div>

      </form>
      
    </div>
  );
}

export default App;
