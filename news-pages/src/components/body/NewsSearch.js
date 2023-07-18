import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NewsSearch = () => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '10px',
    };

    return (
        <div style={style}>
            <div>
                <input></input>
                <FaSearch />
            </div>
        </div>
    );
};

export default NewsSearch;
