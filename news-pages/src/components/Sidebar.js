import React, { useState } from 'react';
import './Sidebar.css';

/*
const [selectedField, setSelctedField] = useState(null);
const handleButtonClick = (field) => {
    setSelectedField(field);
}
*/

const containerStyles = {
    buttonStyle: {
        //background: selectedField === '정치' ? '#0357FF' : 'none',
        //color: selectedField === '정치' ? 'white' : 'black',
        boder: 'none',
        cursor: 'pointer',
        padding: '10px',
        margin: '5px',
        fontSize: '18px',
    },
};
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
    containStyle: {
        backgroundColor: '#d7e4ff',
    },
};
const SideBar = () => {
    /*}
    
    
};
*/

    return (
        <form className="Area">
            {' '}
            <ul>
                {' '}
                <button style={styles} className="Politics box">
                    {' '}
                    정치{' '}
                </button>{' '}
            </ul>{' '}
            <ul>
                {' '}
                <button className="Economy box">경제</button>{' '}
            </ul>{' '}
            <ul>
                {' '}
                <button className="Society box">사회</button>{' '}
            </ul>{' '}
            <ul>
                {' '}
                <button className="IT box">IT</button>{' '}
            </ul>{' '}
            <ul>
                {' '}
                <button className="Entertainment box">연예</button>{' '}
            </ul>{' '}
            <ul>
                {' '}
                <button className="Sprots box">스포츠</button>{' '}
            </ul>{' '}
        </form>
    );
};
export default SideBar;
