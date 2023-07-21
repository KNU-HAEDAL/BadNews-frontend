import React from 'react';
import './Header.css';
import icon from '../icon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
    <div className="Header">
        <div className="title-container">
            <img src={icon} alt="icon" id="icon"/>
            <Link to="/" className="header-title"><strong>Bad News</strong></Link>
        </div>

        {/* <div>
            검색창
        </div> */}

        <div className="txt-container">
            <Link to="/login" className="txt">로그인</Link>
            <div className="txt">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div> 
            <Link to="/mypage" className="txt">마이페이지</Link>
        </div>
    </div>
    );
};

export default Header;
