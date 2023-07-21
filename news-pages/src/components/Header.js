import React from 'react';
import './Header.SCSS';
import { Link } from 'react-router-dom';

const Header = () => {
    const style = {
        container: {
            marginLeft: '15px',
        },
        title: {
            color: '#0357FF',
        },
    };

    return (
        <div style={style.container}>
            <Link to="/"><h1 style={style.title}>Bad News</h1></Link>
        </div>
    );
};

export default Header;
