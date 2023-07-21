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
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <form className="Area">
            <div className="Politics sideBox sidebar-btn">
                <button>정치</button>
            </div>
            <div className="Economy sideBox sidebar-btn">
                <button>경제</button>
            </div>
            <div className="Society sideBox sidebar-btn">
                <button>사회</button>
            </div>
            <div className="IT sideBox sidebar-btn">
                <button>IT Tech</button>
            </div>
            <div className="Entertainment sideBox sidebar-btn">
                <button>연예</button>
            </div>
            <div className="Sports sideBox sidebar-btn">
                <button>스포츠</button>
            </div>
        </form>
    );
};
export default SideBar;
