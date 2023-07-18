import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NewsSearch = () => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '10px',
    };

    const inputStyle = {
        marginLeft: '10px',
    };

    const buttonStyle = {
        background: 'none',
        border: 'none',
    };

    return (
        <div style={style}>
            <div>
                <button style={buttonStyle}>
                    <FaSearch />
                </button>

                <input style={inputStyle}></input>
            </div>
        </div>
    );
};

export default NewsSearch;
