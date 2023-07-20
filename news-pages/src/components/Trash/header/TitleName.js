import React from 'react';

const TitleName = () => {
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
            <h1 style={style.title}>BAD NEWS</h1>
        </div>
    );
};

export default TitleName;
