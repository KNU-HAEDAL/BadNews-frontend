import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CompleteSignup from "./pages/CompleteSignup";
import Mypage from "./pages/Mypage";
import ReturnPage from "./pages/ReturnPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/complete-signup" element={<CompleteSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/article/returnPage" element={<ReturnPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
