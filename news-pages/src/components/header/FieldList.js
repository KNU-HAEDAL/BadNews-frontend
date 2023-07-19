import React, { useState } from 'react';

const FieldList = () => {
    const [selectedField, setSelectedField] = useState(null);

    const styles = {
        divStyle: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            border: 'none',
            padding: '10px',
            margin: '5px',
            fontSize: '1.5rem',
        },

        buttonStyle: {
            background: selectedField === '정치' ? '#0357FF' : 'none',
            color: selectedField === '정치' ? 'white' : 'black',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            margin: '5px',
            fontSize: '1.5rem',
        },
    };

    const handleButtonClick = (field) => {
        setSelectedField(field);
    };

    return (
        <form>
            <div style={styles.divStyle}>Categories</div>
            <ul>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick('정치')}>
                    정치
                </button>
            </ul>
            <ul>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick('경제')}>
                    경제
                </button>
            </ul>
            <ul>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick('사회')}>
                    사회
                </button>
            </ul>
            <ul>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick('IT')}>
                    IT
                </button>
            </ul>
            <ul>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick('연예')}>
                    연예
                </button>
            </ul>
            <ul>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick('스포츠')}>
                    스포츠
                </button>
            </ul>
        </form>
    );
};

export default FieldList;
