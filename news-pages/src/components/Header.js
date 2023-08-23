import React, { useState, useEffect } from 'react';
import { Login } from '../pages/Login';
import './Header.css';
import logo from '../logo.png';
import search from '../search.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchBox = () => {
    return (
        <div className="search-container">
            <input id="search-box" type="text" placeholder="검색어를 입력하세요" img></input>
            <Link to="/">
                <img src={search} alt="돋보기" id="search-icon" />
            </Link>
        </div>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 서버에 로그인 상태를 확인하는 요청을 보냅니다.
        axios
            .get('http://localhost:8080/checkLoginStatus')
            .then((response) => {
                // 서버에서 로그인 상태를 확인한 후, 그 결과를 상태로 설정합니다.
                setIsLoggedIn(response.data.isLoggedIn);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleLogin = () => {
        // if return(idValue) == true:
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
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
                    {isLoggedIn ? (
                        <Link to="/login" className="header-menu" onClick={handleLogout}>
                            로그인
                        </Link>
                    ) : (
                        <Link to="/" className="header-menu" onClick={handleLogin}>
                            로그아웃
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
