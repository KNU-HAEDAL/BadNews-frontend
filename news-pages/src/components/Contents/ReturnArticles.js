import React, { useState } from 'react';
import '../Sidebar';
import '../../components/Contents/CategoriesResult.css';
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
            <div className="article-subcontainer2">
                <img src={article.image.path} alt="기사 이미지" id="article-img"/>
            </div>
        </div>
    );
}

const ReturnArticles = (props) => {
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

    return (
        <div className="CategoriesResult">
            <div className="contents">
                {/* 상단 문구 */}
                <div className="today-text" style={{ color: '#595959', fontSize: '1.1rem' }}>
                    <strong>'{props.news.state.data[0].category}'</strong>&nbsp;영역 추천 기사
                </div>
                
                {/* articles */}
                {articles.slice(0, 5).map((article, index) => (
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
}

export default ReturnArticles;
