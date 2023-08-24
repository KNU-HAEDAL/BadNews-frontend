import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
// import "./PageNumbers";
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


const CategoriesResult = () => {
    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick1 = () => {
        var image = document.getElementById('bookmark');
        image.src = marked;
    };

    const handleBookmarkClick2 = () => {
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
            <div className="today-text">오늘의 기사 요약!</div>

            <div className="PageWrap">
                <form className="article-container">
                    <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    <h2 className="TitleItem">상온 초전도체??? 대박일까?</h2>
                    <ul className="DateItem"> 2023-08-23</ul>
                    <ul className="SummaryItem">상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될수있겠지?</ul>
                </form>
            </div>

            <div className="PageWrap">
                <form className="article-container">
                    <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    <h2 className="TitleItem">태풍이 하나 더 올까?</h2>
                    <ul className="DateItem"> 2023-08-23</ul>
                    <ul className="SummaryItem">기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"</ul>
                </form>
            </div>
        </div>
    );
};

export default CategoriesResult;
