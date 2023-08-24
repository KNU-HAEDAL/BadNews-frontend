import React from 'react';
import '../Sidebar';
import '../../components/Contents/CategoriesResult.css';
import Posts from '../../components/Contents/Posts';
import { useLocation, useNavigate, Route } from 'react-router-dom';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


function ReturnArticles(props) {
    console.log('props');
    console.log(props);
    return (
        <div className="CategoriesResult">
            <div className="today-text">카테고리 기사 요약!</div>

            <div className="acticle-container">
                <div className="bookmark-container"><img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} /></div>
                <strong className="article-title">{props.news.state.data.title}</strong>
                <div className="article-date"> {props.news.state.data.date}</div>
                <div className="article-summary">{props.news.state.data.context}</div>
            </div>

            <div className="page-numbers">
                <Posts />
            </div>
        </div>
    );
}

export default ReturnArticles;
