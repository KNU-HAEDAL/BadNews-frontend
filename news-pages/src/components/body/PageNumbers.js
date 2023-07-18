import React from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '50px',
        backgroundColor: 'lightgray',
    },
    triangleButton: {
        width: 0,
        height: 0,
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderLeft: '8px solid black',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        margin: '0 5px',
    },
};

const PageNumbers = () => {
    return (
        <div style={styles.container}>
            <button style={styles.triangleButton}></button>
            <span style={styles.PageNumbers}>1 2 3 4</span>
            <button style={styles.triangleButton}></button>
        </div>
    );
};

export default PageNumbers;
