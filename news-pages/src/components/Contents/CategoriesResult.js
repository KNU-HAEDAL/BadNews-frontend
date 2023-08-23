import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';
import Posts from './Posts';

const title1 = '상온 초전도체??? 대박일까?';
const title2 = '태풍이 하나 더 올까?';
const summary1 = '상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될수있겠지?';
const summary2 = '기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"';

const CategoriesResult = () => {
    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick = () => {
        var image = document.getElementById('bookmark');
        image.src = marked;
    };

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                // 각 entry에 대한 처리 로직 작성
                if (entry.isIntersecting) {
                    console.log('Form element is intersecting!');
                    // 관찰되었을 때 실행할 동작 추가
                }
            });
        };

        const observerOptions = {
            root: document.querySelector('.ScrollableSection'), // 스크롤바를 적용할 부모 요소 선택
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const formsToObserve = document.querySelectorAll('.ScrollableSection form');

        formsToObserve.forEach((form) => {
            observer.observe(form);
        });

        return () => {
            formsToObserve.forEach((form) => {
                observer.unobserve(form);
            });

            // Observer 해제 로직 추가 (컴포넌트 언마운트 시)
        };
    }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

    return (
        <div className="ScrollBar">
            {/*<div className="CategoryName">"{categoryName}"</div>*/}
            {/* <div className="CategoryNameContainer">"{categoryName}"</div> */}
            <div className="PageWrap1">
                <form className="article-container">
                    <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick} />
                    <h2 className="TitleItem">{title1}</h2>
                    <ul className="DateItem"> 2023-08-23 17:10:40</ul>
                    <ul className="SummaryItem">{summary1}</ul>
                </form>
            </div>

            <div className="PageWrap2">
                <form className="article-container">
                    <h2 className="TitleItem">{title2}</h2>
                    <ul className="DateItem"> 2023-08-23 17:10:40</ul>
                    <ul className="SummaryItem">{summary2}</ul>
                </form>
            </div>

            {/* Rest of the code */}
        </div>
    );
};

export default CategoriesResult;
