import React from 'react';
import './Header.SCSS';
import { Link } from 'react-router-dom';

const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '50px',
    },
    title: {
        color: '#0357FF',
        fontSize: '35px',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        paddingLeft: '25px'
    },
};

const Header = () => {
    return (
        <div style={style.container}>
            <Link to="/" style={style.title}><strong>Bad News</strong></Link>
        </div>
    );
};

export default Header;
