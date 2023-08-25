import React from "react";

function Counter({ number, onLogin, onLogout }) {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onLogin}>로그인</button>
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </div>
  );
}

export default Counter;
