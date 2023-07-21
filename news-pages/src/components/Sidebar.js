import React, { useState } from 'react';
import './Sidebar.css';

const SideBar = () => {
    return (
        <form className="Area">
            <div id="caterogies-title"><strong>카테고리</strong></div>

            <button className="categories-btn">정치</button>
            <button className="categories-btn">경제</button>
            <button className="categories-btn">사회</button>
            <button className="categories-btn">IT | 테크</button>
            <button className="categories-btn">연예</button>
            <button className="categories-btn">스포츠 | 예술</button>
        </form>
    );
};
export default SideBar;
