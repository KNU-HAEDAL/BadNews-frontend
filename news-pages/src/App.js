import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ReturnPage from "./pages/ReturnPage";
import { createStore } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import counter from "./modules/counter";

const store = createStore(counter); // 스토어를 만듭니다.
console.log("redux 확인" + store.getState()); // 스토어의 상태를 확인해봅시다.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <counter />
        </Provider>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/article/returnPage" element={<ReturnPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
