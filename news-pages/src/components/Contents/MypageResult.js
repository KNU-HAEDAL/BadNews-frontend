import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import Pagination from './Pagination';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


const CategoriesResult = () => {
    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick1 = () => {
        var image = document.getElementById('bookmark');
        image.src = {marked};
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
        <div className="CategoriesResult">
            <div className="contents">
                {/* 상단 문구 */}
                <div className="today-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ color:'#0357ff', fontSize:'1.45rem' }}>내가 스크랩한 기사</strong>
                    <div style={{ color: '#595959', fontSize: '1rem' }}>&nbsp;&nbsp;북마크로 관심 기사를 스크랩하고 관리해보세요</div>
                </div>

                {/* article 1 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">상온 초전도체??? 대박일까?</strong>
                            <div className="bookmark-container">
                                <img src={marked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                            </div>
                        </div>
                        <div className="article-info">서울신문&nbsp;&nbsp;|&nbsp;&nbsp;2023-08-25</div>
                        <div className="article-summary">상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될 수 있겠지?</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                    </div> */}
                </div>

                {/* article 2 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">태풍이 하나 더 올까?</strong>
                            <div className="bookmark-container">
                                <img src={marked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                            </div>
                        </div>
                        <div className="article-date">매일경제&nbsp;&nbsp;|&nbsp;&nbsp;2023-08-25</div>
                        <div className="article-summary">기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                    </div> */}
                </div>

                {/* article 3 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">기사 3</strong>
                            <div className="bookmark-container">
                                <img src={marked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                            </div>
                        </div>
                        <div className="article-date">스포티비뉴스&nbsp;&nbsp;|&nbsp;&nbsp;2023-08-25</div>
                        <div className="article-summary">룰룰........즐겁다</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                    </div> */}
                </div>
            </div>

            <div className="page-numbers">
                <Pagination />
            </div>
        </div>
    );
};

export default CategoriesResult;
