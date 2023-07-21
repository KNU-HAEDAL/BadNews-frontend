import React, { useState } from 'react';
import './Sidebar.css';
import category from '../category.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SideBar = () => {

    function showArticles (choosedCtgr){
    
      // 변수에 인풋값 저장
      // id 브라우저 내부 저장값으로 수정필요
      const idValue = '1234';
      const ctgrValue = choosedCtgr;
      const data = {
        userId: idValue,
        category: ctgrValue,
        sort: 1
      };
    
      axios.post('http://localhost:8080/article/save',{
        userId: idValue,
        category: ctgrValue,
        sort: 1
      })
      //성공시 then 실행
      .then(function (response) {
        console.log(response.result);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        console.log(error);
      });
    
    }

    return (
        <form className="Area">
            <div className="categories-container">
                <div id="categories-title">
                    <img src={category} alt="caregories icon" id="categories-icon"/>
                    <strong>카테고리</strong>
                </div>

                <button className="categories-btn" onClick="saveAndSend(event)">정치</button>
                <button className="categories-btn">경제</button>
                <button className="categories-btn">사회</button>
                <button className="categories-btn">IT | 테크</button>
                <button className="categories-btn">연예</button>
                <button className="categories-btn">스포츠 | 예술</button>
            </div>
        </form>
    );
};
export default SideBar;
