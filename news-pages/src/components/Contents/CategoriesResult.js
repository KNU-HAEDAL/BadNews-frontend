import './PageNumbers';
import PageNumbers from './PageNumbers';
import React from 'react';
import './CategoriesResult.css';

const title = '제목입니다';
const date = '2023.07.18';
const summary = 'GPT가 세상을 지배하고 있다.';

const CategoriesResult = () => {
    // let match = useMatch(); /* 현재 경로의 path */

    return (
        <div>
            <div className="PageWrap1">
                <form className="FormContainer">
                    <h2 className="TitleItem">{title}</h2>
                    <ul className="DateItem"> {date}</ul>
                    <ul className="SummaryItem">{summary}</ul>
                </form>
            </div>
            <div className="PageWrap1">
                <form className="FormContainer">
                    <h2 className="TitleItem">{title}</h2>
                    <ul className="DateItem"> {date}</ul>
                    <ul className="SummaryItem">{summary}</ul>
                </form>
            </div>
            <div className="PageWrap1">
                <form className="FormContainer">
                    <h2 className="TitleItem">{title}</h2>
                    <ul className="DateItem"> {date}</ul>
                    <ul className="SummaryItem">{summary}</ul>
                </form>
            </div>
        </div>
    );
};

export default CategoriesResult;
