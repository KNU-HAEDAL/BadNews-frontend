import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/font.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./modules/counter";

const store = createStore(counter); // 스토어를 만듭니다.
console.log("redux 확인" + store.getState()); // 스토어의 상태를 확인해봅시다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
