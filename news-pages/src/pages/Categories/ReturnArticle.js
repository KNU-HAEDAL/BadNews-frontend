import React from 'react';
import '../../components/Sidebar';
import '../../components/Contents/CategoriesResult.css';
import { useLocation, useNavigate, Route } from 'react-router-dom';


function ReturnArticles(props) {
    console.log('props');
    console.log(props);
    return (
        <div>
            <div className="PageWrap1">
                <form className="acticle-container">
                    <h2 className="TitleItem">{props.news.state.data.title}</h2>
                    <ul className="DateItem"> {props.news.state.data.date}</ul>
                    <ul className="SummaryItem">{props.news.state.data.context}</ul>
                </form>
            </div>
        </div>
    );
}

export default ReturnArticles;
