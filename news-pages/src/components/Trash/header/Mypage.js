import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Mypage = () => {
    const style = {
        container: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            justifyContent: 'flex-end',
            marginTop: '10px',
            marginBottom: '10px',
        },
        button: {
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        icon: {
            marginRight: '5px',
            fontSize: '30px',
        },
    };

    return (
        <div style={style.container}>
            <button style={style.button}>
                <FaUserCircle style={style.icon} />
            </button>
        </div>
    );
};

export default Mypage;
