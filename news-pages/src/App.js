import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Mypage from './pages/Mypage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    {/*const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const HorizonLine = {
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid #aaa',
        lineHeight: '0.1em',
        margin: '10px 0 20px',
    };
    */}

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route>
                        <Mypage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
  