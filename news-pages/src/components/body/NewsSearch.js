import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NewsSearch = () => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '10px',
    };

    const inputWrapper = {
        display: 'flex',
        borderRadius: '50px',
        border: 'solid 1px #0357FF',
        alignItems: 'center',
    };

    const inputStyle = {
        type: 'text',
        flex: 1,
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px',
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        border: 'none',
        placeholder: '뉴스 검색',
    };

    const buttonStyle = {
        background: 'none',
        border: 'none',
        padding: '0 8px',
    };

    return (
        <div style={style}>
            <div style={inputWrapper}>
                <input style={inputStyle} />

                <button style={buttonStyle}>
                    <FaSearch />
                </button>
            </div>
        </div>
    );
};

export default NewsSearch;
