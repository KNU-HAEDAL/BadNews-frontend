import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import Pagination from './Pagination';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


const CategoriesResult = () => {
    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick1 = () => {
        var image = document.getElementById('bookmark');
        image.src = marked;
    };

    // const handleBookmarkClick2 = () => {
    //     var image = document.getElementById('bookmark');
    //     image.src = marked;
    // };

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
        <div className="CategoriesResult">
            <div className="contents">
                <strong className="today-text" style={{ color:'#0357ff', fontSize:'1.45rem' }}>내가 스크랩한 기사</strong>

                <div className="article-container">
                    <div className="bookmark-container" style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    </div>
                    <strong className="article-title">상온 초전도체??? 대박일까?</strong>
                    <div className="article-date" style={{display:'flex', justifyContent:'flex-end'}}>2023-08-23</div>
                    <div className="article-summary">상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될 수 있겠지?</div>
                </div>

                <div className="article-container">
                    <div className="bookmark-container" style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    </div>
                    <strong className="article-title">태풍이 하나 더 올까?</strong>
                    <div className="article-date" style={{display:'flex', justifyContent:'flex-end'}}>2023-08-23</div>
                    <div className="article-summary">기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"</div>
                </div>

                <div className="article-container">
                    <div className="bookmark-container" style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    </div>
                    <strong className="article-title">그냥 하나 더 추가</strong>
                    <div className="article-date" style={{display:'flex', justifyContent:'flex-end'}}>2023-08-23</div>
                    <div className="article-summary">룰룰........즐겁다</div>
                </div>
            </div>

            <div className="page-numbers">
                <Pagination />
            </div>
        </div>
    );
};

export default CategoriesResult;