import React, { useState } from 'react';
import '../Sidebar';
import '../../components/Contents/CategoriesResult.css';
import Pagination from './Pagination';
import { useLocation, useNavigate, Route } from 'react-router-dom';
// import '../../bookmark_unmarked1.png'


const ReturnArticles = (props) => {
    const [isMarked, setIsMarked] = useState(false);

    const handleBookmarkClick1 = () => {
        var image = document.getElementById('bookmark');
        image.src = '../../bookmark_marked1.png';
    };

    console.log('props');
    console.log(props);

    return (
        <div className="CategoriesResult">
            <div className="contents">
                <div className="today-text" style={{ color: '#595959', fontSize: '1.1rem' }}>
                    <strong>'{props.news.state.data[0].category}'</strong>&nbsp;영역 추천 기사
                </div>
                
                {/* article 1 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">{props.news.state.data[0].title}</strong>
                            <div className="bookmark-container">
                                <img src='../../bookmark_unmarked1.png' alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                            </div>
                        </div>
                        <div className="article-date">{props.news.state.data[0].date}</div>
                        <div className="article-summary">{props.news.state.data[0].context}</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                    </div> */}
                </div>

                {/* article 2 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">{props.news.state.data[1].title}</strong>
                            <div className="bookmark-container">
                                <img src='../../bookmark_unmarked2.png' alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                            </div>
                        </div>
                        <div className="article-date">{props.news.state.data[1].date}</div>
                        <div className="article-summary">{props.news.state.data[1].context}</div>
                    </div>
                    {/* <div className="article-subcontainer2">
                    </div> */}
                </div>

                {/* article 3 */}
                <div className="article-container">
                    <div className="article-subcontainer1">
                        <div className="title-bookmark-container">
                            <strong className="article-title">{props.news.state.data[2].title}</strong>
                            <div className="bookmark-container">
                                <img src='../../bookmark_unmarked3.png' alt="unmarked" id="bookmark" onClick={handleBookmarkClick1} />
                            </div>
                        </div>
                        <div className="article-date">{props.news.state.data[2].date}</div>
                        <div className="article-summary">{props.news.state.data[2].context}</div>
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
}

export default ReturnArticles;
