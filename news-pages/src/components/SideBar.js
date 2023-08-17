import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';
import axios from 'axios';

const SideBar = () => {

    const showArticles = (choosedCtgr) => {
        choosedCtgr.
    
    //   // 변수에 인풋값 저장
    //   // id 브라우저 내부 저장값으로 수정필요
    //   const idValue = '1234';
    //   const ctgrValue = choosedCtgr;
    //   const data = {
    //     userId: idValue,
    //     category: ctgrValue,
    //     sort: 1
    //   };
    
    //   axios.post('http://localhost:8080/article/save',{
    //     userId: idValue,
    //     category: ctgrValue,
    //     sort: 1
    //   })
    //   //성공시 then 실행
    //   .then(function (response) {
    //     document.querySelector('.TitleItem').value = response.data['title'];

    //   })
    //   //실패 시 catch 실행
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    
    document.querySelector('.TitleItem').value = 'aaa';

    }

    return (
        <form className="Area">
            <div className="categories-container">
                <div id="caterogies-title">
                    <img src={category} alt="caregories icon" id="categories-icon" />
                    <strong>카테고리</strong>
                </div>

                <button className="categories-btn" onClick={(e) => {showArticles('정치')}}>정치</button>
                <button className="categories-btn" onClick={() => {showArticles('경제')}}>경제</button>
                <button className="categories-btn" onClick={() => {showArticles('사회')}}>사회</button>
                <button className="categories-btn" onClick={() => {showArticles('IT/과학')}}>IT | 과학</button>
                <button className="categories-btn" onClick={() => {showArticles('생활/문화')}}>생활 | 문화</button>
                <button className="categories-btn" onClick={() => {showArticles('세계')}}>세계</button>
            </div>
        </form>
    );
};
export default SideBar;
