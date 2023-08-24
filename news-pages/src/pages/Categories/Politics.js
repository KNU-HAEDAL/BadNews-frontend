import React from 'react';
import Sidebar from '../../components/Sidebar';

const title1 = '상온 초전도체??? 대박일까?';
const title2 = '태풍이 하나 더 올까?';
const title3 = 'GPT 5.0이 등장할까???';
const date = '2023-07-18';
const summary1 = '상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될수있겠지?';
const summary2 = '기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"';
const summary3 = '그럼 진짜 사람이 필요 없지 않을까...? 전세계 떠들썩..';
const categoryName = '정치';

const politics = () => {
    return (
        <div>
            <div className="PageWrap1">
                <form className="article-container">
                    <h2 className="TitleItem">{title1}</h2>
                    <ul className="DateItem"> {date}</ul>
                    <ul className="SummaryItem">{summary1}</ul>
                </form>
            </div>
            <div className="PageWrap2">
                <form className="article-container">
                    <h2 className="TitleItem">{title2}</h2>
                    <ul className="DateItem"> {date}</ul>
                    <ul className="SummaryItem">{summary2}</ul>
                </form>
            </div>
        </div>
    );
};

export default politics;
