import React, { useState, useEffect } from 'react';
import './CategoriesResult.css';
import Article from './Article';
import Pagination from './Pagination';
import axios from 'axios';

const CategoriesResult = (props) => {
    const [articles, setArticles] = useState([]);

    const handleBookmarkClick = (clickedArticle) => {
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article === clickedArticle ? { ...article, isMarked: !article.isMarked } : article
            )
        );
    };

    // 홈에 기사 렌더링 - 서버 호출하여 값 리턴
    // 컴포넌트가 마운트되거나 selectedCategory가 변경될 때마다 호출되는 효과(사이드 이펙트)
    useEffect(() => {
        if (!props.news || !props.news.state || !props.news.state.data) {
            console.error('props.news is undefined');
            return;
        }

        const idValue = '1234';
        const data = {
            userId: idValue,
            category: 'default',
            sort: 1,
        };

        axios
            .post('http://13.124.161.27:8080/article/home', data)
            .then(function (response) {
                console.log('home:' + response.data);

                // Update articles with the response data
                setArticles(
                    response.data.map((article) => ({
                        ...article, isMarked: false,
                    }))
                );
            })
            .catch(function (error) {
                console.log('failed to return articles to home:', error);
            });

        // // Update articles whenever props.news.state.data changes
        // setArticles(
        //     props.news.state.data.map((article) => ({
        //         ...article, isMarked: false,
        //     }))
        // );
    }, [props.news]); // Add props.news as a dependency

    console.log('값이 도착했습니다.');
    console.log(props);

    return (
        <div className="CategoriesResult">
            <div className="contents">
                <div className="today-text-container">
                    <strong className="today-text" style={{ color: '#0357ff', fontSize: '1.45rem' }}>
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
