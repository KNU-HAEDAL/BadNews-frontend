import React, { useState } from 'react';
import './Sidebar.css';

const styles = {
    btnStyle: {
        background: '#d7e4ff',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        margin: '5px',
        fontSize: '18px',
    },

    hoverStyle: {
        backgroud: '#f1f6ff',
    },

    containStyle: {
        display: 'flex',
        justifyContent: 'center',
    },
};

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
            <ul>
                <button
                    style={isHovered ? { ...styles.btnStyle, ...styles.hoverStyle } : styles.btnStyle}
                    className="Politics sideBox"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    정치
                </button>
            </ul>
            <ul>
                <button style={styles.btnStyle} className="Economy sideBox">
                    경제
                </button>
            </ul>
            <ul>
                <button style={styles.btnStyle} className="Society sideBox">
                    사회
                </button>
            </ul>
            <ul>
                <button style={styles.btnStyle} className="IT sideBox">
                    IT Tech
                </button>
            </ul>
            <ul>
                <button style={styles.btnStyle} className="Entertainment sideBox">
                    연예
                </button>
            </ul>
            <ul>
                <button style={styles.btnStyle} className="Sprots sideBox">
                    스포츠
                </button>
            </ul>
        </form>
    );
};
export default SideBar;
