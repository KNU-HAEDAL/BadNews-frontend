import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = (props) => {
    // 카테고리 버튼 클릭 시 스타일 적용
    var buttons = document.getElementsByClassName("categories-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var category = this.getAttribute("data-category");
            var elements = document.querySelectorAll("[data-category='" + category + "']");
            for (var j = 0; j < elements.length; j++) {
            elements[j].style.fontWeight = "bold";
            }
        });
    }
    

    const navigate = useNavigate();

    const navigateToCategory = (article) => {
        console.log('title');

        navigate('/article/returnpage', {
            state: { data: article },
        });
    };

    const showArticles = (choosedCtgr) => {
        // 변수에 인풋값 저장
        // id 브라우저 내부 저장값으로 수정필요
        const idValue = '1234';
        const ctgrValue = choosedCtgr;
        const data = {
            userId: idValue,
            category: ctgrValue,
            sort: 1,
        };

        axios
            .post('http://13.124.161.27:8080/article/save', {
                userId: idValue,
                category: ctgrValue,
                sort: 1,
            })
            //성공시 then 실행
            .then(function (response) {
                console.log(response.data);
                
                //서버에서 받아온 데이터는 response.data에 저장
                navigateToCategory(response.data);
            })
            //실패 시 catch 실행
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Sidebar">
            <div className="categories-container">
                <div id="categories-title">
                    <img src={category} alt="categories icon" id="categories-icon" />
                    <strong>카테고리</strong>
                </div>

                <button
                    className="categories-btn"
                    data-category="category1"
                    onClick={() => {
                        showArticles('정치');
                    }}
                >
                    정치
                </button>

                <button
                    className="categories-btn"
                    data-category="category2"
                    onClick={() => {
                        showArticles('경제');
                    }}
                >
                    경제
                </button>

                <button
                    className="categories-btn"
                    data-category="category3"
                    onClick={() => {
                        showArticles('사회');
                    }}
                >
                    사회
                </button>

                <button
                    className="categories-btn"
                    data-category="category4"
                    onClick={() => {
                        showArticles('IT/과학');
                    }}
                >
                    IT | 과학
                </button>

                <button
                    className="categories-btn"
                    data-category="category5"
                    onClick={() => {
                        showArticles('생활/문화');
                    }}
                >
                    생활 | 문화
                </button>

                <button
                    className="categories-btn"
                    data-category="category6"
                    onClick={() => {
                        showArticles('스포츠');
                    }}
                >
                    스포츠
                </button>
            </div>
        </div>
    );
};
export default Sidebar;
