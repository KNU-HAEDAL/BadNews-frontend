import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import Pagination from './Pagination';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


const CategoriesResult = () => {
    const [isMarked, setIsMarked] = useState(false);

    return (
        <div className="CategoriesResult">
            <div className="contents">
                {/* 상단 문구 */}
                <strong className="today-text" style={{ color:'#0357ff', fontSize:'1.45rem' }}>
                    오늘의 추천 기사
                </strong>

                {/* article 1 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">상온 초전도체??? 대박일까?</strong>
                            <div className="bookmark-container">
                                <img src={marked} alt="unmarked" id="bookmark" />
                            </div>
                        </div>
                        <div className="article-info">중앙일보&nbsp;&nbsp;|&nbsp;&nbsp;2023-08-25</div>
                        <div className="article-summary">상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될 수 있겠지?</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                        <img src="../../기사-이미지.jpeg" alt="기사 이미지 1" id="article-img" />
                    </div> */}
                </div>

                {/* article 2 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">태풍이 하나 더 올까?</strong>
                            <div className="bookmark-container">
                                <img src={marked} alt="unmarked" id="bookmark" />
                            </div>
                        </div>
                        <div className="article-date">이데일리&nbsp;&nbsp;|&nbsp;&nbsp;2023-08-25</div>
                        <div className="article-summary">기상청의 잇따른 정보 오류로 인해... 국민들 모두 "혼란"</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                        <img src="../../기사-이미지.jpeg" alt="기사 이미지 1" id="article-img" />
                    </div> */}
                </div>

                {/* article 3 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">기사 3</strong>
                            <div className="bookmark-container">
                                <img src={marked} alt="unmarked" id="bookmark" />
                            </div>
                        </div>
                        <div className="article-date">조선일보&nbsp;&nbsp;|&nbsp;&nbsp;2023-08-25</div>
                        <div className="article-summary">룰룰........즐겁다</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                        <img src="../../기사-이미지.jpeg" alt="기사 이미지 1" id="article-img" />
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
