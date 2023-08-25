import React, { useState } from 'react';
import '../Sidebar';
import '../../components/Contents/CategoriesResult.css';
import Pagination from './Pagination';
import { Sidebar } from '../Sidebar';
import { useLocation, useNavigate, Route } from 'react-router-dom';
import unmarked from '../../bookmark_unmarked.png';
import marked from '../../bookmark_marked.png';


const ReturnArticles = (props) => {
    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick1 = () => {
        var image = document.getElementById('bookmark');
        image.src = marked;
    };

    console.log('props');
    console.log(props);

    return (
        <div className="CategoriesResult">
            <div className="contents">
                <div className="today-text" style={{ color: '#595959', fontSize: '1.1rem' }}>
                    <strong>'{props.news.state.data[0].category}'</strong>&nbsp;영역 추천 기사
                </div>
                
                <div className="article-container">
                    <div className="bookmark-container" style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    </div>
                    <strong className="article-title">{props.news.state.data[0].title}</strong>
                    <div className="article-date"> {props.news.state.data[0].date}</div>
                    <div className="article-summary">{props.news.state.data[0].context}</div>
                </div>

                <div className="article-container">
                    <div className="bookmark-container" style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    </div>
                    <strong className="article-title">{props.news.state.data[1].title}</strong>
                    <div className="article-date"> {props.news.state.data[1].date}</div>
                    <div className="article-summary">{props.news.state.data[1].context}</div>
                </div>

                <div className="article-container">
                    <div className="bookmark-container" style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={unmarked} alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                    </div>
                    <strong className="article-title">{props.news.state.data[2].title}</strong>
                    <div className="article-date"> {props.news.state.data[2].date}</div>
                    <div className="article-summary">{props.news.state.data[2].context}</div>
                </div>
            </div>

            <div className="page-numbers">
                <Pagination />
            </div>
        </div>
    );
}

export default ReturnArticles;
