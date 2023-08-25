import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import Pagination from './Pagination';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


const Article = ({ article, handleBookmarkClick }) => {
    return (
        <div className="article-container">
            <div className="article-subcontainer1">
                <div className="title-bookmark-container">
                    <strong className="article-title">{article.title}</strong>
                    <div className="bookmark-container">
                        <img src={article.isMarked ? marked : unmarked}
                            alt={article.isMarked ? "marked" : "unmarked"}
                            id="bookmark"
                            onClick={() => handleBookmarkClick(article)} />
                    </div>
                </div>
                <div className="article-info">{article.author}&nbsp;&nbsp;|&nbsp;&nbsp;{article.date}</div>
                <div className="article-url-container">
                    <Link to={article.url} target="_blank" className="article-url">기사 원문</Link> 
                </div>
                <div className="article-keywords"> {article.keywords.map(item => `#${item} `)} </div>
                <div className="article-summary">{article.context}</div>
            </div>
            
        </div>
    );
}

const CategoriesResult = (props) => {
    const [articles, setArticles] = useState(
        props.news.state.data.map((article) => ({
          ...article,
          isMarked: false,
        }))
    );

    const handleBookmarkClick = (clickedArticle) => {
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article === clickedArticle ? { ...article, isMarked: !article.isMarked } : article
            )
        );
    };

    console.log("props");
    console.log(props);  


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
                <strong className="today-text" style={{ color:'#0357ff', fontSize:'1.45rem' }}>
                    오늘의 추천 기사
                </strong>

                {/* article */}
                {articles.slice(0, 5).map( (article, index) => (
                    <Article key={index} article={article} handleBookmarkClick={handleBookmarkClick}/>
                ))}
            </div>

            <div className="page-numbers">
                <Pagination />
            </div>
        </div>
    );
};

export default CategoriesResult;
