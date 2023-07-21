import React, { useState } from 'react';
import './Sidebar.css';

const SideBar = () => {
    const [selectedField, setSelectedField] = useState(null);
    const handleButtonClick = (field) => {
        setSelectedField(field);
    };

    const styles = {
        buttonStyle: {
            background: 'none',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            margin: '5px',
            fontSize: '18px',
            textAlign: 'right',
        },
    };

    return (
        <form>
            <ul>
                <button
                    style={styles.buttonStyle}
                    className={`box ${selectedField === '정치' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('정치')}
                >
                    정치
                </button>
            </ul>
            <ul>
                <button
                    style={styles.buttonStyle}
                    className={`box ${selectedField === '경제' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('경제')}
                >
                    경제
                </button>
            </ul>
            <ul>
                <button
                    style={styles.buttonStyle}
                    className={`box ${selectedField === '사회' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('사회')}
                >
                    사회
                </button>
            </ul>
            <ul>
                <button
                    style={styles.buttonStyle}
                    className={`box ${selectedField === 'IT' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('IT')}
                >
                    IT
                </button>
            </ul>
            <ul>
                <button
                    style={styles.buttonStyle}
                    className={`box ${selectedField === '연예' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('연예')}
                >
                    연예
                </button>
            </ul>
            <ul>
                <button
                    style={styles.buttonStyle}
                    className={`box ${selectedField === '스포츠' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('스포츠')}
                >
                    스포츠
                </button>
            </ul>
        </form>
    );
};

export default SideBar;
