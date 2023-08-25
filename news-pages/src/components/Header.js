import React, { useState, useEffect } from "react";
import { Login } from "../pages/Login";
import "./Header.css";
import logo from "../logo.png";
import search from "../search.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setLogout } from "../modules/counter";

const SearchBox = () => {
  return (
    <div className="search-container">
      <input
        id="search-box"
        type="text"
        placeholder="검색어를 입력하세요"
        img
      ></input>
      <Link to="/">
        <img src={search} alt="돋보기" id="search-icon" />
      </Link>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const isLoggedIn = location.state && location.state.isLoggedIn;
  const defaultIsLoggedIn = false;
  const actualIsLoggedIn =
    isLoggedIn !== undefined ? isLoggedIn : defaultIsLoggedIn;

  const isUserLoggedIn = useSelector((state) => state.counter.login);

  useEffect(() => {
    console.log("check login : " + isLoggedIn);
  }, [isLoggedIn]);
  const handleLogin = () => {
    console.log("hi" + isLoggedIn);
  };

  const handleLogout = () => {
    console.log("hi2" + isLoggedIn);
  };

  return (
    <div className="Header">
      <Link to="/" className="title-container">
        <img src={logo} alt="Bad News logo" id="logo" />
        <strong className="header-title">Bad News</strong>
      </Link>

      <div className="search-login-container">
        <SearchBox />

        <div className="header-menu-container">
          {actualIsLoggedIn ? (
            <Link to="/" className="header-menu" onClick={handleLogin}>
              로그아웃
            </Link>
          ) : (
            <Link to="/login" className="header-menu" onClick={handleLogout}>
              로그인
            </Link>
          )}
          <div className="header-menu-bar">|&nbsp;</div>
          <Link to="/mypage" className="header-menu">
            마이페이지
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
