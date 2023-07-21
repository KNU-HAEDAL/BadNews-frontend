import React, { useState } from 'react';
import './Sidebar.css';

const styles = {
    btnstyle: {
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
                    style={isHovered ? { ...styles.btnstyle, ...styles.hoverStyle } : styles.btnstyle}
                    className="Politics sideBox"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    정치
                </button>
            </ul>
            <ul>
                <button style={styles.btnstyle} className="Economy sideBox">
                    경제
                </button>
            </ul>
            <ul>
                <button style={styles.btnstyle} className="Society sideBox">
                    사회
                </button>
            </ul>
            <ul>
                <button style={styles.btnstyle} className="IT sideBox">
                    IT Tech
                </button>
            </ul>
            <ul>
                <button style={styles.btnstyle} className="Entertainment sideBox">
                    연예
                </button>
            </ul>
            <ul>
                <button style={styles.btnstyle} className="Sprots sideBox">
                    스포츠
                </button>
            </ul>
        </form>
    );
};
export default SideBar;
