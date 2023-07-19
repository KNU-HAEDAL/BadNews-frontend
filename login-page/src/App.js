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
}

export default App;
