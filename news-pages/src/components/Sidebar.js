import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <form className="Area">
            <div className="categories-container">
                <div id="categories-title">
                    <img src={category} alt="caregories icon" id="categories-icon"/>
                    <strong>카테고리</strong>
                </div>

                <button className="categories-btn" onClick="saveAndSend(event)">정치</button>
                <button className="categories-btn">경제</button>
                <button className="categories-btn">사회</button>
                <button className="categories-btn">IT | 테크</button>
                <button className="categories-btn">연예</button>
                <button className="categories-btn">스포츠 | 예술</button>
            </div>
        </form>
    );
};
export default SideBar;
