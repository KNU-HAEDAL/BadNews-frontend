import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = (props) => {
    const navigate = useNavigate();


    const navigateToPolitics = (article) => {
        //제목 띄우기
        alert(article.title)
        
        navigate('/article/returnPage');
        setTxt();
    };
    // SideBar에서 받아온 함수
    const setTxt = () => {
        this.props.propFunction("변경후");
    }

    function showArticles(choosedCtgr) {
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
            .post('http://localhost:8080/article/save', {
                userId: idValue,
                category: ctgrValue,
                sort: 1,
            })
            //성공시 then 실행
            .then(function (response) {
                console.log(response.data);
                
                //서버에서 받아온 데이터는 response.data에 저장
                navigateToPolitics(response.data);
            })
            //실패 시 catch 실행
            .catch(function (error) {
                console.log(error);
            });

        
    }

    return (
        <div className="Area">
            <div className="categories-container">
                <div id="categories-title">
                    <img src={category} alt="categories icon" id="categories-icon" />
                    <strong>카테고리</strong>
                </div>

                <button
                    className="categories-btn"
                    onClick={() => {
                        showArticles('정치');
                    }}
                >
                    정치
                </button>

                <button
                    className="categories-btn"
                    onClick={() => {
                        showArticles('경제');
                    }}
                >
                    경제
                </button>

                <button
                    className="categories-btn"
                    onClick={() => {
                        showArticles('사회');
                    }}
                >
                    사회
                </button>

                <button
                    className="categories-btn"
                    onClick={() => {
                        showArticles('IT/테크');
                    }}
                >
                    IT | 테크
                </button>

                <button
                    className="categories-btn"
                    onClick={() => {
                        showArticles('문화/예술');
                    }}
                >
                    문화 | 예술
                </button>

                <button
                    className="categories-btn"
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
