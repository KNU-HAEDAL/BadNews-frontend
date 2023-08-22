import React from 'react';
import '../../components/Sidebar'
import '../../components/Contents/CategoriesResult.css'
import unmarked from '../../bookmark_unmarked.png'
import { useLocation,useNavigate , Route } from 'react-router-dom';


const date = '2023.07.18';
const summary1 = '상온 초전도체 연구가 성공만 한다면... 우리나라는 부자가 될수있겠지?';


function returnArticles  (props) {


    return (
        <div>
            <div className="PageWrap1">
                <form className="FormContainer">
                    <h2 className="TitleItem">{props.title1}</h2>
                    <ul className="DateItem"> {date}</ul>
                    <ul className="SummaryItem">{summary1}</ul>
                </form>
            </div>
        </div>
    );
};



export default returnArticles;
