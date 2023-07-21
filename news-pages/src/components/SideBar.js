import React, { useState } from 'react';
import './Sidebar.css';

// const styles = {
//     // btnStyle: {
//     //     background: '#d7e4ff',
//     //     border: 'none',
//     //     cursor: 'pointer',
//     //     padding: '10px',
//     //     margin: '5px',
//     //     fontSize: '18px',
//     // },

//     hoverStyle: {
//         backgroud: '#f1f6ff',
//     },

//     containStyle: {
//         display: 'flex',
//         justifyContent: 'center',
//     },
// };

const SideBar = () => {
    return (
        <form className="Area">
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
