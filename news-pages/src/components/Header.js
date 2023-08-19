import React, { useState } from 'react';
import './Header.css';
import logo from '../logo.png'
import search from '../search.png'
import { Link } from 'react-router-dom';

const SearchBox = () => {
    return (
        <div className="search-container">
            <input id="search-box" type="text" placeholder="검색어를 입력하세요" img></input>
            <Link to="/"><img src={search} alt="돋보기" id="search-icon" /></Link>
        </div>
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLoginButtonClick = () => {
        // 여기에 로그인 여부를 검사한 뒤 
        // 로그인 상태이면 setIsLoggedIn(isLoggedIn = true)
        // 로그아웃 상태이면 setIsLoggedIn(isLoggedIn = false)
        setIsLoggedIn(!isLoggedIn); // 클릭 시 isLoggedIn 값 반전
    };

    return ( 
    <div className="Header">
        <Link to="/" className="title-container">
            <img src={logo} alt="Bad News logo" id="logo"/>
            <strong className="header-title">Bad News</strong>
        </Link>

        <div className="search-login-container">
            <SearchBox />

            <div className="header-menu-container">
                <Link to="/login" className="header-menu" onClick={handleLoginButtonClick}>
                    {isLoggedIn ? '로그아웃' : '로그인'}</Link>
                <div className="header-menu-bar">|&nbsp;</div> 
                <Link to="/mypage" className="header-menu">마이페이지</Link>
            </div>
        </div>
    </div>
    );
};

export default Header;
