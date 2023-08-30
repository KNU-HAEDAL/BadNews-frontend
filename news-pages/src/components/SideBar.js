import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import category from "../category.png";
import axios from "axios";

export default function Sidebar(props) {
  const navigate = useNavigate();

  const [chosenCategory, setChosenCategory] = useState("");
  const [click, setClick] = useState(false);

  const navigateToChosenCategory = (article) => {
    navigate("/article/save", {
      state: { data: article },
    });
  };
  
  const handleCategoryClick = async (chosenCtgr) => {
    setClick(chosenCtgr);
    setChosenCategory(chosenCtgr); // 선택한 카테고리 업데이트
  };

  useEffect(() => {
    // axios 통신 - 서버로 POST 요청 (해당 카테고리의 기사를 가져오도록)
    if (chosenCategory) {
      const data = {
        userId: "1234",
        category: chosenCategory,
        sort: 1,
      };

      axios
        .post("http://13.125.37.219:8080/article/save", data)
        .then(function (response) {
          console.log("click:" + response.data);
          navigateToChosenCategory(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [click]); // click 상태가 변경될 때마다

  return (
    <div className="Sidebar">
      <div className="categories-container">
        <div id="categories-title">
          <img src={category} alt="categories icon" id="categories-icon" />
          <strong>카테고리</strong>
        </div>

        <div id="categories-list">
          <button
            className={`categories-btn ${click === "정치" ? "active" : ""}`}
            id="categories-politics-btn"
            onClick={() => handleCategoryClick("정치")}
          >정치</button>

          <button
            className={`categories-btn ${click === "경제" ? "active" : ""}`}
            onClick={() => handleCategoryClick("경제")}
          >경제</button>

          <button
            className={`categories-btn ${click === "사회" ? "active" : ""}`}
            onClick={() => handleCategoryClick("사회")}
          >사회</button>

          <button
            className={`categories-btn ${click === "IT/과학" ? "active" : ""}`}
            onClick={() => handleCategoryClick("IT/과학")}
          >IT | 과학</button>

          <button
            className={`categories-btn ${click === "생활/문화" ? "active" : ""}`}
            onClick={() => handleCategoryClick("생활/문화")}
          >생활 | 문화</button>

          <button
            className={`categories-btn ${click === "스포츠" ? "active" : ""}`}
            id="categories-sports-btn"
            onClick={() => handleCategoryClick("스포츠")}
          >스포츠</button>
        </div>
      </div>
    </div>
  );
}
