import React from 'react';
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
    return ( 
    <div className="Header">
        <div className="title-container">
            <img src={logo} alt="Bad News logo" id="logo"/>
            <Link to="/" className="header-title"><strong>Bad News</strong></Link>
        </div>

        <div className="search-login-container">
            <SearchBox />

            <div className="txt-container">
                <Link to="/login" className="txt">로그인</Link>
                <div className="txt">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div> 
                <Link to="/mypage" className="txt">마이페이지</Link>
            </div>
        </div>
    </div>
    );
};

export default Header;
