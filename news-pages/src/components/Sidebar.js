import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';

const SideBar = () => {
    return (
        <form className="Area">
            <div className="categories-container">
                <div id="caterogies-title">
                    <img src={category} alt="caregories icon" id="categories-icon" />
                    <strong>카테고리</strong>
                </div>

                <button className="categories-btn" onClick="">
                    정치
                </button>
                <button className="categories-btn">경제</button>
                <button className="categories-btn">사회</button>
                <button className="categories-btn">IT | 과학</button>
                <button className="categories-btn">세계</button>
                <button className="categories-btn">생활 | 문화</button>
            </div>
        </form>
    );
};
export default SideBar;
