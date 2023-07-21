import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 52db4a1ed1851a2083ab7b36cbfc8a446141c9aa

const SideBar = () => {
    return (
        <form className="Area">
            <div className="categories-container">
<<<<<<< HEAD
                <div id="categories-title">
                    <img src={category} alt="caregories icon" id="categories-icon"/>
                    <strong>카테고리</strong>
                </div>

                <button className="categories-btn" onClick="saveAndSend(event)">정치</button>
=======
                <div id="caterogies-title">
                    <img src={category} alt="caregories icon" id="categories-icon" />
                    <strong>카테고리</strong>
                </div>

                <button className="categories-btn" onClick="">
                    정치
                </button>
>>>>>>> 52db4a1ed1851a2083ab7b36cbfc8a446141c9aa
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
