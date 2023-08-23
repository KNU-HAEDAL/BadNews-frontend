import React, { useState } from 'react';
import './CategoriesResult.css';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';
import Posts from './Posts';

const title1 = '상온 초전도체??? 대박일까?';
const title2 = '태풍이 하나 더 올까?';
const title3 = 'GPT 5.0이 등장할까???';
const date = '2023.07.18';
const summary1 = '상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될수있겠지?';
const summary2 = '기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"';
const summary3 = '그럼 진짜 사람이 필요 없지 않을까...? 전세계 떠들썩..';
const categoryName = '정치';

const CategoriesResult = () => {
    // let match = useMatch(); /* 현재 경로의 path */

    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick = () => {
        // 북마크 상태 핸들러
        // 마크 상태이면 setIsMarked(isMarked = true)
        // 로그아웃 상태이면 setIsMarekd(isMarked = false)

        // setIsMarked(!isMarked); // 클릭 시 isMarked 값 반전

        // 이미지 변경
        var image = document.getElementById('bookmark');
        image.src = { marked };
    };

    return (
        <div>
            {/*<div className="CategoryName">"{categoryName}"</div>*/}
            {/* <div className="CategoryNameContainer">"{categoryName}"</div> */}
            <div className="PageWrap1">
                <form className="article-container">
                    <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick} />
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
            <div className="PageNumber">
                <Posts />
            </div>
        </div>
    );
};

export default CategoriesResult;
