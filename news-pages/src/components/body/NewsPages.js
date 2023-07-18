import React from 'react';

const title = '기사제목 : GPT가 짱이야!';
const date = '2023.07.18';
const summary = 'GPT가 세상을 지배하고 있다.';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '1000px',
        height: '200px',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
        color: '#0357FF',
    },
    date: {
        marginBottom: '10px',
    },
    summary: {
        marginBottom: '10px',
    },
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

const NewsPages = () => {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <form style={styles.container}>
                    <h2 style={styles.title}>{title}</h2>
                    <ul style={styles.date}>날짜 : {date}</ul>
                    <ul style={styles.summary}>
                        요약 <p>{summary}</p>
                    </ul>
                </form>
                <form style={styles.container}>
                    <h2 style={styles.title}>{title}</h2>
                    <ul style={styles.date}>날짜 : {date}</ul>
                    <ul style={styles.summary}>
                        요약 <p>{summary}</p>
                    </ul>
                </form>
                <form style={styles.container}>
                    <h2 style={styles.title}>{title}</h2>
                    <ul style={styles.date}>날짜 : {date}</ul>
                    <ul style={styles.summary}>
                        요약 <p>{summary}</p>
                    </ul>
                </form>
                <form style={styles.container}>
                    <h2 style={styles.title}>{title}</h2>
                    <ul style={styles.date}>날짜 : {date}</ul>
                    <ul style={styles.summary}>
                        요약 <p>{summary}</p>
                    </ul>
                </form>
                <form style={styles.container}>
                    <h2 style={styles.title}>{title}</h2>
                    <ul style={styles.date}>날짜 : {date}</ul>
                    <ul style={styles.summary}>
                        요약 <p>{summary}</p>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default NewsPages;
