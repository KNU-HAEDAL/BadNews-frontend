import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import Article from './Article';
import Pagination from './Pagination';
import { Link } from "react-router-dom";


const CategoriesResult = (props) => {
    const [articles, setArticles] = useState(
        props.news.state.data.map((article) => ({
          ...article, isMarked: false,
        }))
    );

    const handleBookmarkClick = (clickedArticle) => {
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
            article === clickedArticle
                ? { ...article, isMarked: !article.isMarked }
                : article
            )
        );
    };

    // 홈에 기사 가져오기 (endpoint: /article/home)
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/article/home');
                if (response.ok) {
                    const data = await response.json();
                    const formattedArticles = data.map((article) => ({
                        ...article,
                        isMarked: false,
                    }));
                    setArticles(formattedArticles);
                }
            } catch (error) {
                console.error('기사 가져오기 오류:', error);
            }
        };
    
        fetchArticles();
    }, []); // 컴포넌트 마운트 시 기사 가져오기 위해 빈 종속성 배열 사용
    

    // useEffect(() => {
    //     // Update articles whenever props.news.state.data changes
    //     setArticles(
    //       props.news.state.data.map((article) => ({
    //         ...article, isMarked: false,
    //       }))
    //     );
    // }, [props.news.state.data]); // Add props.news.state.data as a dependency

    console.log("값이 도착했습니다.");
    console.log(props);

    return (
        <div className="CategoriesResult">
            <div className="contents">
                <div className="today-text-container">
                    <strong className="today-text" style={{ color:'#0357ff', fontSize:'1.45rem' }}>
                        오늘의 추천 기사
                    </strong>
                </div>

                {articles.map((article, index) => (
                // {articles.slice(0, 5).map((article, index) => (
                    <Article
                        key={index}
                        article={article}
                        handleBookmarkClick={handleBookmarkClick}
                    />
                ))}
            </div>

            <div className="page-numbers">
                <Pagination />
            </div>
        </div>
    );
};

export default CategoriesResult;
