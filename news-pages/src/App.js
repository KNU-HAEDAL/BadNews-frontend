import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Mypage from './pages/Mypage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mypage" element={<Mypage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
  