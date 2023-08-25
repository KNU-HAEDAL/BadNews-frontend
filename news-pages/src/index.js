import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/font.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./modules/counter";

const store = createStore(counter); //
console.log("redux 확인 " + JSON.stringify(store.getState()));
console.log("redux 확인 그냥 getState " + store.getState());

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
