import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ReturnPage from "./pages/ReturnPage";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import CompleteSignup from "./pages/CompleteSignup";
import Login from "./pages/Login";
import { CookiesProvider } from 'react-cookie';

function App() {
  const paths = ["/", "article/save"];

  return (
    <CookiesProvider>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {paths.map((path, index) => (
            <Route key={index} exact path={path} element={<ReturnPage />} />
          ))} 
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/complete" element={<CompleteSignup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
